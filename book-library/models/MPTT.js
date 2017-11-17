// id as $loki and parentId
var _ = require('underscore');
var MPTT = function () {

};

MPTT.prototype.calculateLeftRightValues = function (tree) {
  var roots = _.where(tree, {parentId: 0});
  var superRoot;
  var randomParentId = 'RANDOMPARENTID';

  if (roots.length > 1) {
    //if more than two roots are there then insert one super root
    superRoot = {$loki: randomParentId, parentId: 0};
    tree.push(superRoot);
    _.each(roots, (root) => {
      root.parentId = randomParentId;
    });
  } else {
    superRoot = _.first(roots);
  }

  this.rebuiltTree(superRoot, 1, tree);


  // remove added dummy root
  tree = _.filter(tree, (node) => {
    return node.$loki !== randomParentId
  });
  // clear parentId of dummy root
  _.map(_.where(tree, {parentId: randomParentId}), (node) => {
    node.parentId = 0;
  });
  return tree;
};

MPTT.prototype.rebuiltTree = function (node, left, tree) {
  var right = left + 1;

  // get all the children of this node

  var children = _.where(tree, {parentId: node.$loki});

  _.each(children, (child) => {
    right = this.rebuiltTree(child, right, tree);
  });

  //we have got the left value and now that we`ve processed
  // the children of this node we also know the right value

  node.left = left;
  node.right = right;

  // return the right value of this node + 1
  return right + 1;
};

module.exports = MPTT;
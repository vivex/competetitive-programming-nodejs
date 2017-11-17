var _ = require('underscore');
var loki = require('lokijs');
var db = new loki('loki.json');


var DAO = function (collectionName) {
  this.collection = db.addCollection(collectionName);
};

DAO.prototype.find = function (queryObj) {
  return this.collection.find(queryObj);
};



DAO.prototype.insert = function (object) {
  return this.collection.insert(object);
};


module.exports = DAO;
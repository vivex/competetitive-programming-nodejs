var Trie = require('../trie/Trie');
var expect  = require('chai').expect;

it('Testing Trie', function (done) {
  var trie = new Trie();
  var keys = ["the", "a", "there", "answer", "any",
    "by", "bye", "their", "vivek"];
  for (var i = 0; i < keys.length ; i++)
    trie.insert(keys[i]);
  expect(trie.search("the")).to.equal(true);
  expect(trie.search("vivek")).to.equal(true);
  expect(trie.search("Delhi")).to.equal(false);
  done();
});
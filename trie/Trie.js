var Trie = function () {
  this.ALPHABET_SIZE = 26;
  this.root = new TrieNode();
};

var TrieNode = function () {
  this.children = [];
  this.isEndOfWord = false;
  for (var i = 0; i < 26; i ++ )
    this.children[i] = null;
};

/**
 * if not present, inserts key into trie
 * if the key is prefix of trie node,
 * just marks leaf node
 * @param key
 */
Trie.prototype.insert = function (key) {
  var level;
  var length = key.length;
  var index;
  var pCrawl = this.root;

  for (level = 0; level < length; level ++){
    index = key.charAt(level) - 'a';
    if (pCrawl.children[index] == null)
      pCrawl.children[index] = new TrieNode();
    pCrawl = pCrawl.children[index];
  }

  // mark last node as leaf
  pCrawl.isEndOfWord = true;
};


Trie.prototype.search = function (key) {
  var level;
  var length = key.length;
  var pCrawl = this.root;
  var index;

  for (level = 0; level < length; level ++) {
    index = key.charAt(level) - 'a';
    if (pCrawl.children[index] == null)
      return false;
    pCrawl = pCrawl.children[index];
  }
  return (pCrawl != null && pCrawl.isEndOfWord);
};

module.exports = Trie;


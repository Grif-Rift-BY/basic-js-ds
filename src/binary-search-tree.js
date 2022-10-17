const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add( data ) {

    this.treeRoot = createNode( this.treeRoot, data);

    function createNode( currentNode, data ) {

      if ( !currentNode ) return new Node( data );
      if ( currentNode.data === data) return currentNode;
      if (data < currentNode.data) {
        currentNode.left = insertNode( currentNode.left, data )
      } else {
        currentNode.right = insertNode(currentNode.right, data)
      }
      return currentNode;

    }

  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};
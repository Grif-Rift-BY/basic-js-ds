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

    this.treeRoot = createNode( this.treeRoot, data );

    function createNode( currentNode, data ) {

      if ( !currentNode ) return new Node( data );
      if ( currentNode.data === data) return currentNode;
      if ( data < currentNode.data ) {
        currentNode.left = createNode( currentNode.left, data )
      } else {
        currentNode.right = createNode(currentNode.right, data)
      }
      return currentNode;

    }

  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }


  find( data ) {
    let currentNode = this.treeRoot;
    while( currentNode ) {
      if ( data < currentNode.data ) currentNode= currentNode.left;
      if ( data > currentNode.data ) currentNode = currentNode.right;
      if ( data == currentNode.data ) return currentNode;
      if ( data == null ) return null;
    }
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let currentNode = this.treeRoot;
    if ( !this.treeRoot ) return null;
    while ( currentNode.left ) currentNode = currentNode.left;
    return currentNode.data;
  }

  max() {
    let currentNode = this.treeRoot;
    if ( !currentNode ) return null;
    while ( currentNode.right ) currentNode = currentNode.right;
    return currentNode.data;
  }



}

module.exports = {
  BinarySearchTree
};
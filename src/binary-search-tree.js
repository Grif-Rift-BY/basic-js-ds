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

  has( data ) {
    return Boolean( this.find( data ) );
  }

  find( data ) {
    let currentNode = this.treeRoot;
    while( currentNode ) {
      if ( data < currentNode.data ){
        currentNode = currentNode.left;
      } else if ( data > currentNode.data ){
        currentNode = currentNode.right;
      } else {
        return currentNode;
      }
    }
    return null;
  }

  remove(data) {

    this.treeRoot = removeNode( this.treeRoot, data ); 
    
    function removeNode( currentNode, data ) {
      if ( !currentNode ) return null; 
      if ( data < currentNode.data ) {
        currentNode.left = removeNode( currentNode.left, data );
        return currentNode;
      } else if ( data > currentNode.data ) {
        currentNode.right = removeNode( currentNode.right, data );
        return currentNode;
      } else {

        if ( !currentNode.left && !currentNode.right ) {
          return null;
        }

        if ( !currentNode.left ) {
          currentNode = currentNode.right;
          return currentNode;
        }

        if ( !currentNode.right ) {
          currentNode = currentNode.left;
          return currentNode;
        }

        let minFromRight = currentNode.right;
        while ( minFromRight.left ) { minFromRight = minFromRight.left; }
        currentNode.data = minFromRight.data;
        currentNode.right = removeNode( currentNode.right, minFromRight.data );
        return currentNode;
      }
    }

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
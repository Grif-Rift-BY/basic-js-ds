const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
	constructor() {
		this.queue = [];
	}
	getUnderlyingList() {
    const head = this.queue[ 0 ];
		return head;
	}

	enqueue(value) {
		if ( this.queue.length != 0 ) {
      const newElement = new ListNode( value );
      const lastElement = this.queue[ this.queue.length - 1 ];
			lastElement.next = newElement;
			this.queue.push( newElement );
		} else {
      const newElement = new ListNode( value );
			this.queue.push( newElement );
		}
	}

	dequeue() {
		const firstElement = this.queue.shift().value;
    return firstElement;
	}
}

module.exports = {
  Queue
};

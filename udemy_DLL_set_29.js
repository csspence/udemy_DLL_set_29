/*
JavaScript Algorithms and Data Structures Masterclass
DLL Set Exercise

Implement the following on a DoublyLinkedList.prototype.

set 

This function should accept an index and a value and update the value of the node in the DoublyLinkedList at the index with the new value.  It should return true if the node is updated successfully, or false if an invalid index is passed in.
*/

class Node{
    constructor(val){
        this.val = val
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor(val){
        this.head = null;
        this.tail = null;
        this.length = 0;      
    }
    push(val){
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    set(index, value){
      let currentNode;
      let counter;
      if(index < 0 || index > this.length) {
        return false;
      }
      if(index < this.length / 2) {
        currentNode = this.head;
        counter = 0;
        while(counter !== index) {
          currentNode = currentNode.next;
          counter++;
        }
      } else {
        currentNode = this.tail;
        counter = this.length - 1;
        while(counter !== index) {
          currrentNode = currentNode.prev;
          counter--;
        }
      }
      currentNode.val = value;
      return true;

    }
}
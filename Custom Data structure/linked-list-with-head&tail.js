// Linked list with head and tail pointer
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    // visualize the list
    print() {
        if (this.isEmpty()) {
            console.log('List is empty')
        }
        else {
            let currentPointer = this.head; // using temporary pointer to traverse through the list
            let listValues = '';
            while (currentPointer) {  // at the end currentPointer will be equal to null or point at null, so we break out of loop
                listValues += `${currentPointer.value} `; // adding each nodes value to listValues
                currentPointer = currentPointer.next;
            }
            console.log(listValues)
        }
    }

    prepend(value) { // O(1)
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }
        else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value) { // O(1)
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++
    }

    removeFromFront(){ // O(1)
        if(this.isEmpty()) {
            return null
        }

        const value = this.head.value
        if (this.size===1) {
            this.head = null;
            this.tail = null;
            this.size--
        }
        else {
            const value = this.head.value
            this.head = this.head.next
            this.size--
        }
        return value
    }

    removeFromEnd() { // O(n)
        if(this.isEmpty()) {
            return null
        }

        const value = this.tail.value
        if (this.size===1) {
            this.head = null;
            this.tail = null;
            this.size--
        }
        else {
            // this.tail=null
            // let prevPointer = this.head
            // while(prevPointer.next) {
            //     prevPointer = prevPointer.next
            // }
            // this.tail=prevPointer

            let prevPointer =this.head
            while(prevPointer.next !== this.tail) {
                prevPointer = prevPointer.next
            }
            prevPointer.next = null
            this.tail = prevPointer
            this.size--
        }
        return value

    }
    // time complexity is better with both tail and head pointer

    // Insertion, Search, remove with value and index are same as linkedList with only headerPointer
}


const list = new LinkedList()
list.print()

list.append(1)
list.print()
list.append(2)
list.append(3)
list.append(4)
list.print()
list.prepend(0)
list.prepend(-1)
list.print()


list.removeFromFront()
list.print()
list.removeFromEnd()
list.print()
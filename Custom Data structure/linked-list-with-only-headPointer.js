// Linked List with only head pointer

class Node {
    constructor(value) {
        this.value = value; // value
        this.next = null; // pointer
    }
}

class LinkedList {
    constructor() {
        this.head = null; // when we instantiate new linked list, head will point at null
        this.size = 0;  // to track number of nodes in linkedlist
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size;
    }

    // adding a node at the front
    prepend(value) { // adding the front doesnot depend on other element or nodes, so O(1)
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node; // head pointing at this node if list is empty
        }
        else {
            node.next = this.head; // added node will point at prev head node
            this.head = node // then head will point at newly added front node
        }
        this.size++
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

    // adding the element at end
    append(value) { // we need to traverse to last element so O(n). This can be improved with the use of tail pointer
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        }
        else {
            let previosPointer = this.head; // similar to currentPointer above in print()
            while (previosPointer.next) { // while prev.next isnot equal to null. To grab the last node and append the new node. 
                previosPointer = previosPointer.next;
            }
            // After breaking the while previousPointer will point at the last node
            previosPointer.next = node; // adding the node at the end of list
        }
        this.size++
    }

    // insert at specific index
    insert(value, index) {
        if (index < 0 || index > this.size) { // if index isnot valid
            console.log("invalid index")
            return
        }

        if (index === 0) { // adding at the front or prepend
            this.prepend(value)
        }

        else{
            const node = new Node(value)
            let previousPointer = this.head
            // let previousIndex = 0
            // while (previousIndex+1 < index ) { // my logic is also correct but while loop should be avoided
            //     previousPointer = previousPointer.next
            //     previousIndex++
            // } 

            for (let i = 0; i<index-1; i++) {
                previousPointer = previousPointer.next // point at node previous to given index after breaking form loop
            }
            node.next = previousPointer.next
            previousPointer.next = node
            this.size++
        }
    }

    // remove with index
    removeFrom(index) {
        if (index<0 || index >= this.size) {
            console.log("remove: invalid index")
            return null
        }

        let removeNode;
        if (index === 0) { // if only one element
            removeNode = this.head;
            this.head = this.head.next; // null 
        }
        else{
            let previousPointer=this.head;
            for (let i=0; i< index-1; i++) {
                previousPointer = previousPointer.next // point at node previous to given index node after breaking form loop
            }
            removeNode = previousPointer.next
            previousPointer.next = removeNode.next;
        }
        this.size--;
        return removeNode.value;
    }

    //remove with value ( only the first value)
    removeValue(value) {
        if(this.isEmpty()) {
            console("Empty List: cannot remove")
        }

        if (this.head.value === value) { // from the front of the list
            this.head = this.head.next
            this.size--
            return value
        }
        else{
            let previousPointer = this.head;
            let removeNode
            
            while (previousPointer.next && previousPointer.next.value !== value) {
                previousPointer = previousPointer.next
            }

            if(previousPointer.next) {
                removeNode = previousPointer.next
                previousPointer.next = removeNode.next
                this.size--
                return value
            }

            console.log("value isnot found in the list")
            return null
        }  
    }

    // remove all the value in the list
    removeAllSameMultipleValue (value) {
        if(this.isEmpty()) {
            console("Empty List: cannot remove")
        }

        if (this.head.value === value) { // from the front of the list
            this.head = this.head.next
            this.size--
            return value
        }
        else{
            let previousPointer = this.head;
            let removeNode
            
            while (previousPointer.next) {  // my own logic
                if ( previousPointer.next.value === value) {
                    removeNode = previousPointer.next
                    if(removeNode.next){
                        previousPointer.next = removeNode.next
                    }
                    else{previousPointer.next = null}
                    this.size--
                }else{
                    previousPointer = previousPointer.next
                }
            }


            console.log("All the value in the list are removed")
            this.print()
            return
        }
    }

    // Search
    search(value) {
        if(this.isEmpty()) {
            console("Search:list is empty")
            return
        }
        let i = 0
        let currentPointer = this.head
        while(currentPointer) {
            if(currentPointer.value === value) {
                return i
            }
            currentPointer = currentPointer.next
            i++
        }
        console.log("value isnot found in the list")
        return -1
    }
    
    // reverse the list
    reverse() { // visualize th code easy
        let prev = null
        let curr = this.head
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr =next
        }
        this.head = prev
    }
}

const list = new LinkedList();

list.print();
console.log('List is empty!: ', list.isEmpty());
console.log('List size', list.getSize());

list.append(10)
list.append(20)
list.print()

list.append(30)
list.print()

list.insert(25, 2)
list.print()
console.log(list.getSize())

console.log(list.removeFrom(2))
list.print()
console.log(list.getSize())

list.append(40)
list.append(40)
list.append(40)
list.append(40)
list.append(50)
list.append(60)
list.append(40)

list.removeValue(70)
list.print()
console.log(list.getSize())

console.log(list.search(50))


list.reverse()
list.print()
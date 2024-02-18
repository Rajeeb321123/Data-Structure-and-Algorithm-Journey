
// Unoptmized 
class UnoptimizedQueue {
    constructor(){
        this.items = []
    }

    enqueue(element){
        this.items.push(element)
    }

    dequeue() { // O(n) : not acceptable
        return this.items.shift()
    }

    isEpmty(){
        return this.items.length === 0
    }

    peek(){
        if(!this.isEpmty()) {
            return this.items[0]
        }
        return null
    }

    size() {
        return this.items.length
    }

    print() {
        console.log(this.items.toString())
    }
}

// Optimized : shift() method is O(n) : which isnot favorable so we have to modify it

class OptimizedQueue {
    constructor(){
        this.items = {}
        this.rear = 0
        this.front = 0
    }

    enqueue(element){
        this.items[this.rear] = element
        // we need to update or increate the rear so next element can be inserted at the rear or tail
        this.rear++
    }

    dequeue() { //O(1)
        const item = this.items[this.front]
        delete this.items[this.front]
        // update or increase the front pointing by 1 in every delete
        this.front++
        return item
    }

    isEpmty() {
        return this.rear - this.front === 0
    }

    peek() {
        return this.items[this.front]
    }

    size() {
        return this.rear - this.front
    }

    print () {
        console.log(this.items)
    }
}

const queue = new OptimizedQueue()

console.log(queue.isEpmty())
queue.enqueue(19)
queue.enqueue(20)
queue.enqueue(24)
console.log(queue.size())
queue.print()

console.log(queue.dequeue())
console.log(queue.peek())






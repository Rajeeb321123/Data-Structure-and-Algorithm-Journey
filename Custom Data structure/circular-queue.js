class CircularQueue {
    constructor (capacity){
        this.items = new Array(capacity)
        this.capacity = capacity
        this.currentLength = 0
        this.rear= -1;
        this.front= -1;
    }

    isFull() {
        return this.currentLength === this.capacity
    }

    isEmpty() {
        return this.currentLength === 0
    }

    enqueue(element) {
        if(!this.isFull()) {
            //Edge caase: after dequeue and if rear already pointing at last position (ef queue of size 5 (0,1,2,3,4), if we Enqueue if may point at last at index 5 or 6th position which doesnot exist.

            this.rear =(this.rear + 1) % this.capacity  // very easy mathmatics eg: (4+1)%5 = 0 and (4+1)%6 = 5
            this.items[this.rear] = element
            this.currentLength += 1

            // of the first insert both front and rear point at -1 so we need to make them(both front and tail/rear) point at 1 
            if(this.front === -1){
                this.front = this.rear
            }
        }
    }

    dequeue() {
        if(this.isEmpty()) {
            return null
        }
        const item = this.items[this.front]
        this.items[this.front] = null
        this.front = (this.front + 1) % this.capacity;
        this.currentLength -= 1

        // if there are no elements left
        if(this.isEmpty()) {
            this.front = -1
            this.rear = -1
        }
        return item
    }

    peek() {
        if(!this.isEmpty()) {
            return this.items[this.front]
        }
        return null
    }

    print() {
        if(this.isEmpty()){
            console.log("Queue is empty")
        }
        else{
            // traverse from front to rear
            let i
            let str = ''
            for(i = this.front; i!== this.rear; i=(i+1)%this.capacity){
                str += this.items[i] + " "
            }
            str += this.items[i]
            console.log(str)
        }
    }
}

const queue = new CircularQueue(5);
console.log(queue.isEmpty())


queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)

console.log(queue.isFull())
queue.print()

console.log(queue.dequeue())

console.log(queue.peek())
queue.print()
queue.enqueue(60)
queue.print()







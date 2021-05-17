class LinkedListNode {
    constructor(value, next){
        this.value = value;
        this.next = next;
    }
}

export default class LinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
    }

    insertAtHead(data){
        const node = new LinkedListNode(data, this.head);
        this.head = node;
        this.length += 1
    }

    // slower than arrays
    getByIndex(index){
        if(index < 0) return null;

        if(index > this.length) return null;

        if(index === 0) return this.head;

        let current = this.head.next;

        for(let i = 1; i< index; i++){
            current = current.next
        }
        
        return current
    }

    insertAtIndex(index, value){
        if(index < 0) return;

        if(index > this.length) return;
        
        if(index === 0) return this.insertAtHead(value);

        const previous = this.getByIndex(index - 1)

        if(previous === null) return null;

        previous.next = new LinkedListNode(value, previous.next);

        this.length += 1;
    }

    removeHead(){
        if(this.head === null) return;

        this.head = this.head.next;
        this.length -= 1;
    }

    removeAtIndex(index, value){
        if(index < 0) return;

        if(index > this.length) return;

        if(index === 0) return this.removeHead();

        const previous = this.getByIndex(index - 1);
        if(previous === null) return null
        
        previous.next = previous.next.next
        this.length -= 1;
    }

    print(){
        let output = '';
        let current = this.head;

        while(current){
            output = `${output}${current.value} => `
            current = current.next
        }

        console.log(`${output}null`)
    }
}

LinkedList.fromValues = function (...values) {
    const list = new LinkedList();
    for(let value of values.reverse()){
        list.insertAtHead(value)
    }
    return list;
}
// exercise create a stack based program
/*
* implementing OOP in javascript with abstraction...
* WeakMap used for private members
* */

const _item = new WeakMap(); // this is used for private member

class Stack {
    constructor() {
        _item.set(this, []);
    }

    set push(obj) {
        _item.get(this).push(obj);
    }

    pop() {
        if (_item.get(this).length === 0) {
            throw new Error('Stack is Empty');
        }
        _item.get(this).pop();
    }

    get peek() {

        this.checkStackIsEmpty();
        return this.getArrLength();

    }

    getArrLength() {

        const item = _item.get(this);
        return item[item.length - 1];

    }

    checkStackIsEmpty(arr) {
        if (_item.get(this).length === 0) {
            throw new Error('Stack is Empty');
        }
    }

    get count() {
        return this.getArrLength();
    }
}

const stack = new Stack();
stack.push = 1
stack.push = 2;
stack.pop();
console.log(stack.peek);
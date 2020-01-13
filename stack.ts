const MAX = 10000

class Stack {
    arr: any[]
    top: number

    constructor() {
        this.arr = []
        this.top = 0
    }

    isEmpty() { 
        return this.arr.length == 0
    }

    isFull() {
        return this.top == MAX
    }

    push(x: number) {
        if (this.isFull()) {
            throw new Error()
        }
        this.top++
        this.arr[this.top] = x
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error()
        }
        this.top--
        return this.arr[this.top+1]
    }
}

const parseArray = (x: any): string[] => {
    return x.split(' ')
}

const calcurate = (arr: any[]): number => {
    for (let i = 0; i < arr.length; i++){
        let c = arr[i]
        switch (c) {
            case '+': s.push(s.pop() + s.pop())
            case '-': s.push(s.pop() - s.pop())
            case '*': s.push(s.pop() * s.pop())
            case '/': s.push(s.pop() / s.pop())
            default: s.push(isNaN(c) ? 0 : parseInt(c))
        }
    }
    return arr[0]
}

const s = new Stack
s.arr = parseArray("1 2 +")

console.log(calcurate(s.arr))

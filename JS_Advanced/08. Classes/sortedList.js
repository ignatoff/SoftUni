class List {
    constructor(array = []) {
        this.array = array.sort((a, b) => a - b);
        this.size = this.array.length;
    }

    add(e) {
        this.array.push(e);
        this.array.sort((a, b) => a - b);
        this.size++;
        return;
    }

    remove(i) {
        if (i < 0 || i >= this.array.length) {
            throw new Error('error');
        } else {
            this.array.splice(i, 1);
            this.size--;
            return;
        }
    }

    get(i) {
        if (i < 0 || i >= this.array.length) {
            throw new Error('error');
        } else {
            return this.array[i];
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
console.log(list.size);
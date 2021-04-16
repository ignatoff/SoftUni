class Stringer {
    constructor(str, num) {
        this.innerString = str;
        this.innerLength = num;
    }

    increase(length) { this.innerLength += length; }

    decrease(length) {
        this.innerLength -= length;

        if (this.innerLength <= 0) {
            this.innerLength = 0;
        }
    }

    toString() {

        if (this.innerLength == 0) {
            return `...`;
        } else if (this.innerLength < this.innerString.length) {
            return this.innerString.slice(0, this.innerLength) + `...`;
        }
        return this.innerString;
    }
}

let s = new Stringer("Viktor", 6);
s.decrease(9);
console.log(s.toString()); // Test
// expect(s.innerLength).to.be.equal(0, "'Stringer.decrease()' function does not work properly");


let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
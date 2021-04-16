class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf() { return this.value; }

    toString() { return `0x` + this.value.toString(16).toUpperCase(); }

    plus(num) { return new Hex(this.value + num); }

    minus(num) { return new Hex(this.value - num); }

    parse(str) { return str.slice(2).toString(10); }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
let c = new Hex(163);
console.log(c.toString());
console.log(c.parse());
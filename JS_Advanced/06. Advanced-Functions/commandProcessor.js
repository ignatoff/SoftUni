function solution() {
    let str = '';

    return {append, removeStart, removeEnd, print}

    function append(text) {
        str += text;
    }
    function removeStart(i) {
        str = str.slice(i);
    }
    function removeEnd(i) {
        str = str.slice(0, -i);
    }
    function print() {
        console.log(str);
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
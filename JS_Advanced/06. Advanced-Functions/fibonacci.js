function getFibonator() {
    let result = 0;
    let firstNum = 1;
    let secondNum = 0;

    return function fib() {
        result = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = result;

        return result;
    }
}

let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13

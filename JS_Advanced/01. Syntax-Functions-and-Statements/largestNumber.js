function largestNumber(a, b, c) {

    let array = [a, b, c].sort((a, b) => b - a);

    return `The largest number is ${array[0]}.`
}

console.log(largestNumber(5, -3, 16));
console.log(largestNumber(-3, -5, -22.5));

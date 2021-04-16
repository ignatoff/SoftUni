function validityChecker(x1, y1, x2, y2) {

    function isValid(x1, y1, x2, y2) {

        const distance = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));

        return (distance == parseInt(distance)) ? 'valid' : 'invalid';
    }

    return `{${x1}, ${y1}} to {0, 0} is ${isValid(x1, y1, 0, 0)}\n` +
        `{${x2}, ${y2}} to {0, 0} is ${isValid(x2, y2, 0, 0)}\n` +
        `{${x1}, ${y1}} to {${x2}, ${y2}} is ${isValid(x1, y1, x2, y2)}`;
}

console.log(validityChecker(3, 0, 0, 4));
console.log(`------------------`);

console.log(validityChecker(2, 1, 1, 1));
console.log(`------------------`);

console.log(validityChecker(2, 1, 4, 5));
console.log(`------------------`);

console.log(validityChecker(1, 3, 3, 3));
console.log(`------------------`);

console.log(validityChecker(5, 4, 4, 5));
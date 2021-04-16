function biggestEl(array) {

    let result = [];

    for (let i = 0; i < array.length; i++) {
        result = result.concat(array[i]);        
    }

    result.sort((a, b) => b - a);

    return result[0];
}

console.log(biggestEl(
    [[20, 50, 10],
    [8, 33, 145]]
));
console.log(biggestEl(
    [[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
));

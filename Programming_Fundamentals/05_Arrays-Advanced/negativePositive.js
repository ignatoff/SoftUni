function negativePositive(array) {
    let result = [];

    for (let num of array) {
        num < 0 ? result.unshift(num) : result.push(num);
    }

    return result.join('\n');
}

console.log(negativePositive([-1, 7, -2, 8, 9]));

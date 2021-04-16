function negPosNumbers(array) {

    const list = [];

    for (const x of array) {

        x < 0 ? list.unshift(x) : list.push(x);
    }

    return list.join('\n');
}

console.log(negPosNumbers([7, -2, 8, 9]));
console.log(negPosNumbers([3, -2, 0, -1]));

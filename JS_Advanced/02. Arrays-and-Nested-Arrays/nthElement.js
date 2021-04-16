function nthElement(array, num) {

    let result = array.filter((x, i) => i % num === 0);

    return result;
}

console.log(nthElement(
    ['5',
        '20',
        '31',
        '4',
        '20'],
    2
));
console.log(nthElement(
    ['dsa',
        'asd',
        'test',
        'tset'],
    2
));
console.log(nthElement(
    ['1',
        '2',
        '3',
        '4',
        '5'],
    6
));

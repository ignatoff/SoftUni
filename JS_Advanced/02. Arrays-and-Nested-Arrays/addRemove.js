function addRemove(array) {

    let result = [];
    let num = 0;

    for (let i = 0; i < array.length; i++) {
        num++;

        if (array[i] == 'add') result.push(num);
        else if (array[i] == 'remove') result.pop(num);
    }

    if (!result.length) return 'Empty';
    else return result.join('\n');
}

console.log(addRemove(
    ['add',
        'add',
        'add',
        'add']

));
console.log(addRemove(
    ['add',
        'add',
        'remove',
        'add',
        'add']
));
console.log(addRemove(
    ['remove',
        'remove',
        'remove']
));

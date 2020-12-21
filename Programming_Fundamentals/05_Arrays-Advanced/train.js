function train(array) {

    let wagons = array.shift().split(' ').map(Number);
    let capacity = Number(array.shift());

    for (let i = 0; i < array.length; i++) {
        let command = array[i].split(' ');
        let passengers = 0;
        if (command[0] === 'Add') {
            wagons.push(Number(command[1]));
            continue;
        } else {
            passengers = Number(command[0]);
        }

        for (let j = 0; j < wagons.length; j++) {
            if ((passengers + wagons[j]) <= capacity) {
                wagons[j] += passengers;
                break;
            }
        }
    }
    return wagons.join(' ');
}

console.log(train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
));

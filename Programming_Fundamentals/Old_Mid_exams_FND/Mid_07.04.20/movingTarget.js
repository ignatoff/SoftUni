function movingTarget(array) {

    let targets = array.shift().split(' ').map(Number);
    let command = array.shift().split(' ');

    while (command != 'End') {
        let action = command.shift();
        let [index, num] = command.map(Number);

        if (action == 'Shoot' && index > -1 && index < targets.length) {
            targets[index] -= num;

            if (targets[index] <= 0) targets.splice(index, 1);

        } else if (action == 'Add') {

            if (index > -1 && index < targets.length) targets.splice(index, 0, num);
            else console.log(`Invalid placement!`);

        } else if (action == 'Strike') {
            let start = index - num;
            let end = index + num;

            if (start > -1 && end < targets.length) targets.splice(index - num, (num + num) + 1);
            else console.log(`Strike missed!`);
        }
        command = array.shift().split(' ');
    }
    console.log(targets.join('|'));
}

movingTarget(
    [
        '52 74 23 44 96 110',
        'Shoot 5 10',
        'Shoot 1 80',
        'Strike 2 1',
        'Add 22 3',
        'End'
    ]
);
movingTarget(
    [
        '47 55 85 78 99 20',
        'Shoot 1 55',
        'Shoot 8 15',
        'Strike 2 3',
        'Add 0 22',
        'Add 2 40',
        'Add 2 50',
        'End'
    ]
);
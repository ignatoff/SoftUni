function lastStop(array) {
    
    let paintings = array.shift().split(' ').map(Number);
    let instruction = array.shift().split(' ');

    while (instruction != 'END') {
        let command = instruction[0];
        let num1 = Number(instruction[1]);
        let num2 = Number(instruction[2]);
        let index = 0;

        if (command == 'Change' && paintings.includes(num1)) {
            index = paintings.indexOf(num1);
            paintings[index] = num2;
        } else if (command == 'Hide' && paintings.includes(num1)) {
            index = paintings.indexOf(num1);
            paintings.splice(index, 1);
        } else if (command == 'Switch' && paintings.includes(num1) && paintings.includes(num2)) {
            index = paintings.indexOf(num1);
            let index2 = paintings.indexOf(num2);
            let temp = paintings[index];
            paintings[index] = paintings[index2];
            paintings[index2] = temp;
        } else if (command == 'Insert' && num1 < paintings.length) {
            paintings.splice(num1 + 1, 0, num2);
        } else if (command == 'Reverse') {
            paintings.reverse();
        }
        instruction = array.shift().split(' ');
    }
    console.log(paintings.join(' '));    
}

lastStop(
    [
        '77 120 115 101 101 97 78 88 112 111 108 101 111 110',
        'Insert 5 32',
        'Switch 97 78',
        'Hide 88',
        'Change 120 117',
        'END'
      ]
);
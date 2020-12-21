function arrayModifier(array) {
    
    let numArr = array.shift().split(' ').map(Number);
    let command = array.shift().split(' ');

    while (command[0] != 'end') {

        switch (command[0]) {
            case 'swap':
                let a = Number(command[1]);
                let b = Number(command[2]);
                let temp = numArr[a];
                numArr[a] = numArr[b];
                numArr[b] = temp;
                break;
            case 'multiply':
                let x = Number(command[1]);
                let y = Number(command[2]);
                numArr[x] *= numArr[y];
                break;
            case 'decrease':
                numArr = numArr.map(x => x - 1);
                break;
        }
        command = array.shift().split(' ');
    }
    console.log(numArr.join(', '));    
}

arrayModifier(
    [
        '23 -2 321 87 42 90 -123',
        'swap 1 3',
        'swap 3 6',
        'swap 1 0',
        'multiply 1 2',
        'multiply 2 1',
        'decrease',
        'end'
      ]      
);
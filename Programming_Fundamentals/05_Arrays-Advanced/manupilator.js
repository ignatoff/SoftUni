function manipulator(array, command) {

    for (let i = 0; i < command.length; i++) {
        let act = command[i].split(' ');
        let index = 0;
        let element = 0;

        if (act.includes('print')) break;

        switch (act[0]) {
            case 'add': 
                index = Number(act[1]);
                element = Number(act[2]);
                array.splice(index, 0, element);
                break;
            case 'addMany': 
                index = Number(act[1]);
                for (let j = 2; j < act.length; j++) {
                    element = Number(act[j]);
                    array.splice(index, 0, element);
                    index++;
                } break;
            case 'contains': 
                element = Number(act[1]);
                console.log(array.indexOf(element));
                break;
            case 'remove':
                index = Number(act[1]);
                array.splice(index, 1);
                break;
            case 'shift':
                let positions = Number(act[1]);
                for (let k = 0; k < positions; k++) {
                    let shifted = array.shift();
                    array.push(shifted);                    
                } break;
            case 'sumPairs':
                let result = [];
                for (let m = 0; m < array.length; m += 2) {
                    let sum = array[m] + array[m + 1];
                    array[m + 1] == undefined ? result.push(array[m]) : result.push(sum);
                }
                array = result;
                break;
        }
    }
    console.log(`[ ${array.join(', ')} ]`);
}

manipulator(
    [1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
);
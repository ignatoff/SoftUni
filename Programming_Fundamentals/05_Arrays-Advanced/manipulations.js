function manipulations(array) {

    let index;
    let nums = array.shift()
        .split(' ')
        .map(Number);

        for (let i = 0; i < array.length; i++) {
            let element = array[i];
            let command = element.split(' ');
            switch (command[0]) {
                case "Add": nums.push(Number(command[1])); 
                    break;
                case "Remove": index = nums.indexOf(Number(command[1])); 
                    if (index >= 0) nums.splice(command[1], 1);
                    break;
                case "RemoveAt": nums.splice(command[1], 1); 
                    break;
                case "Insert": nums.splice(command[2], 0, Number(command[1])); 
                    break;
            }            
        }
        console.log(nums.join(' '));    
}

manipulations([
    '4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
]);
function inventory(array) {

    let list = array.shift().split(', ');
    let command = array.shift().split(' - ');

    while (command[0] != 'Craft!') {
        let item = command[1];
        
        if (command[0] == 'Collect' && !list.includes(item)) {
            list.push(item);
        } else if (command[0] == 'Drop' && list.includes(item)) {
            let index = list.indexOf(item);
            list.splice(index, 1);
        } else if (command[0] == 'Combine Items') {
            let [oldItem, newItem] = command[1].split(':');

            if (list.includes(oldItem)) {
                let index = list.indexOf(oldItem);
                list.splice(index + 1, 0, newItem);
            }
        } else if (command[0] == 'Renew' && list.includes(item)) {
            let index = list.indexOf(item);
            list.splice(index, 1);
            list.push(item);
        }
        command = array.shift().split(' - ');
    }
    console.log(list.join(', '));    
}

inventory(
    [ 'Iron, Wood, Sword', 'Collect - Gold', 'Drop - Wood', 'Craft!' ]
      
);
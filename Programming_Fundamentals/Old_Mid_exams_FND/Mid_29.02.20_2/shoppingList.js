function shoppingList(array) {

    let list = array.shift().split('!');
    let command = array.shift();

    while (command != 'Go Shopping!') {
        let shop = command.split(' ');
        let item = shop[1];

        switch (shop[0]) {
            case 'Urgent':
                if (!list.includes(item)) {
                    list.unshift(item);
                } break;

            case 'Unnecessary':
                if (list.includes(item)) {
                    let index = list.indexOf(item);
                    list.splice(index, 1);
                } break;

            case 'Correct':
                let newItem = shop[2];
                if (list.includes(item)) {
                    let index = list.indexOf(item);
                    list.splice(index, 1, newItem);
                } break;

            case 'Rearrange':
                if (list.includes(item)) {
                    let index = list.indexOf(item);
                    list.splice(index, 1);
                    list.push(item);
                } break;
        }
        command = array.shift();
    }
    console.log(list.join(', '));    
}

shoppingList(
    [
        'Tomatoes!Potatoes!Bread',
        'Unnecessary Milk',
        'Urgent Tomatoes',
        'Go Shopping!'
      ]
);
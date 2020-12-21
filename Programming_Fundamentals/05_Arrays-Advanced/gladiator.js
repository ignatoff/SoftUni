function gladiator(array) {

    let inventory = array.shift().split(' ');

    for (let i = 0; i < array.length; i++) {
        let act = array[i].split(' ');
        let equipment = act[1];
        let index = 0;

        switch (act[0]) {
            case 'Buy':
                if (!inventory.includes(equipment)) inventory.push(equipment);
                break;
            case 'Trash':
                index = inventory.indexOf(equipment);
                if (index > -1) inventory.splice(index, 1);
                break;
            case 'Repair':
                let repair = '';
                index = inventory.indexOf(equipment);
                if (index > -1) repair = inventory.splice(index, 1);
                inventory.push(repair);
                break;
            case 'Upgrade':
                let arr = equipment.split('-');
                equipment = arr[0];
                let upgarde = arr[1];
                index = inventory.indexOf(equipment);
                if (index > -1) inventory.splice((index + 1), 0, `${equipment}:${upgarde}`);
                break;
        }
    }
    console.log(inventory.join(' '));
}

gladiator(
    ['SWORD Shield Spear',
        'Trash Bow',
        'Repair Shield',
        'Upgrade Helmet-V']

);
function plant(array) {

    let commands = {
        Rate(plants, name, num) {
            num = Number(num);

            if (plants.hasOwnProperty(name)) plants[name].rating.push(num);
            else console.log(`error`);
        },
        Update(plants, name, newRarity) {
            newRarity = Number(newRarity);

            if (plants.hasOwnProperty(name)) plants[name].rarity = newRarity;
            else console.log(`error`);
        },
        Reset(plants, name) {

            if (plants.hasOwnProperty(name)) plants[name].rating = [];
            else console.log(`error`);
        }
    };

    let n = Number(array.shift());
    let line;
    let plants = {};

    for (let i = 0; i < n; i++) {
        let [name, num] = array.shift().split('<->');
        num = Number(num);

        if (!plants.hasOwnProperty(name)) {
            plants[name] = {
                rarity: 0,
                rating: []
            }
        }
        plants[name].rarity = num;
    }

    while ((line = array.shift()) != 'Exhibition') {
        let [commandName, args] = line.split(': ');
        let [name, arg] = args.split(' - ');
        let command = commands[commandName](plants, name, arg);
    }
    console.log(`Plants for the exhibition:`);    

    let sorted = Object.entries(plants)
        .sort(compare)
        .forEach(([name, plant]) => {
            let reduced = 0;

            if (plant.rating.length > 0) reduced = plant.rating.reduce((acc, c) => acc + c, 0) / plant.rating.length;
            console.log(`- ${name}; Rarity: ${plant.rarity}; Rating: ${reduced.toFixed(2)}`);
        });

    function compare([nameA, plantA], [nameB, plantB]) {
        let reducedA = plantA.rating.reduce((acc, c) => acc + c, 0) / plantA.rating.length;
        let reducedB = plantB.rating.reduce((acc, c) => acc + c, 0) / plantA.rating.length;

        return plantB.rarity - plantA.rarity || reducedB - reducedA;
    }
}

plant(
    [
        '3',
        'Arnoldii<->4',
        'Woodii<->7',
        'Welwitschia<->2',
        'Rate: Woodii - 10',
        'Rate: Welwitschia - 7',
        'Rate: Arnoldii - 3',
        'Rate: Woodii - 5',
        'Update: Woodii - 5',
        'Reset: Arnoldii',
        'Exhibition'
    ]
);

console.log(`--------------------`);

plant(
    [
        '2',
        'Candelabra<->10',
        'Oahu<->10',
        'Rate: Oahu - 7',
        'Rate: Candelabra - 6',
        'Exhibition'
    ]
);
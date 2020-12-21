function meals(array) {

    let commands = {
        Like(guests, guestName, meal) {

            if (!guests.hasOwnProperty(guestName)) guests[guestName] = [];
        
            if (!guests[guestName].includes(meal)) guests[guestName].push(meal);
        },
        Unlike(guests, guestName, meal) {
        
            if (!guests.hasOwnProperty(guestName)) {
                console.log(`${guestName} is not at the party.`);
            }
            else if (!guests[guestName].includes(meal)) {
                console.log(`${guestName} doesn't have the ${meal} in his/her collection.`);
            }
            else if (guests[guestName].includes(meal)) {
                counter++;
                console.log(`${guestName} doesn't like the ${meal}.`);
                let i = guests[guestName].indexOf(meal);
                guests[guestName].splice(i, 1);
            }
        }
    }

    let guests = {};
    let counter = 0;
    let line;
    
    while ((line = array.shift()) != 'Stop') {
        let [commName, guestName, meal] = line.split('-');
        command = commands[commName](guests, guestName, meal);
    }

    let sorted = Object.entries(guests)
        .sort(compare)
        .forEach(kvp => {
            console.log(`${kvp[0]}: ${kvp[1].join(', ')}`);            
        });

    console.log(`Unliked meals: ${counter}`);
        
    function compare(a, b) {

        return b[1].length - a[1].length || a[0].localeCompare(b[0]);
    }
}

meals(
    [
        'Like-Krisi-shrimps',
        'Like-Krisi-soup',
        'Like-Misho-salad',
        'Like-Pena-dessert',
        'Stop'
    ]
);

console.log(`-------------------------`);

meals(
    [
        'Like-Krisi-shrimps',
        'Unlike-Vili-carp',
        'Unlike-Krisi-salad',
        'Unlike-Krisi-shrimps',
        'Stop'
    ]
);
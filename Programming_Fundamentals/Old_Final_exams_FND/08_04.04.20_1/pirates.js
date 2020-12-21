function pirates(array) {

    let actions = {
        Plunder(towns, name, pop, gold) {

            [pop, gold] = [Number(pop), Number(gold)];
            let town = towns[name];
            town.pop -= pop;
            town.gold -= gold;
            console.log(`${name} plundered! ${gold} gold stolen, ${pop} citizens killed.`);

            if (town.pop == 0 || town.gold == 0) {
                console.log(`${name} has been wiped off the map!`);
                delete towns[name];
            }
        },
        Prosper(towns, name, gold) {

            gold = Number(gold);
            let town = towns[name];
            if (gold >= 0) {
                town.gold += gold;
                console.log(`${gold} gold added to the city treasury. ${name} now has ${town.gold} gold.`);
            } else {
                console.log(`Gold added cannot be a negative number!`);
            }
        }
    }

    let towns = {};
    let line;

    while ((line = array.shift()) != 'Sail') {
        let [name, pop, gold] = line.split('||');

        if (!towns.hasOwnProperty(name)) towns[name] = { pop: 0, gold: 0 };

        towns[name].pop += Number(pop);
        towns[name].gold += Number(gold);        
    }
    
    while ((line = array.shift()) != 'End') {
        let [actionName, town, ...params] = line.split('=>');
        let action = actions[actionName];
        action(towns, town, ...params);
    }
    
    let sorted = Object.entries(towns).sort(compare);

    if (sorted.length == 0) {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);        
    } else {
        console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`);

        sorted.forEach(kvp => {
            console.log(`${kvp[0]} -> Population: ${kvp[1].pop} citizens, Gold: ${kvp[1].gold} kg`);            
        });
    }

    function compare(a, b) {
        return b[1].gold - a[1].gold || a[0].localeCompare(b[0]);
    }
}

pirates(
    [
        'Tortuga||345000||1250',
        'Santo Domingo||240000||630',
        'Havana||410000||1100',
        'Sail',
        'Plunder=>Tortuga=>75000=>380',
        'Prosper=>Santo Domingo=>180',
        'End'
    ]
);

console.log(`------------------`);

pirates(
    [
        'Nassau||95000||1000',
        'San Juan||930000||1250',
        'Campeche||270000||690',
        'Port Royal||320000||1000',
        'Port Royal||100000||2000',
        'Sail',
        'Prosper=>Port Royal=>-200',
        'Plunder=>Nassau=>94000=>750',
        'Plunder=>Nassau=>1000=>150',
        'Plunder=>Campeche=>150000=>690',
        'End'
    ]
);
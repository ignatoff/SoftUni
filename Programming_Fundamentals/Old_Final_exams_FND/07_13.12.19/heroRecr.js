function heroRecr(array) {

    let commands = {
        Enroll(heroes, heroName) {

            if (!heroes.hasOwnProperty(heroName)) heroes[heroName] = [];
            else console.log(`${heroName} is already enrolled.`);
        },
        Learn(heroes, heroName, spellName) {

            if (heroes.hasOwnProperty(heroName)) {

                if (!heroes[heroName].includes(spellName)) heroes[heroName].push(spellName);
                else console.log(`${heroName} has already learnt ${spellName}.`);

            } else {
                console.log(`${heroName} doesn't exist.`);
            }
        },
        Unlearn(heroes, heroName, spellName) {

            if (heroes.hasOwnProperty(heroName)) {

                if (heroes[heroName].includes(spellName)) {
                    let i = heroes[heroName].indexOf(spellName);
                    let removed = heroes[heroName].splice(i, 1);
                }
                else console.log(`${heroName} doesn't know ${spellName}.`);
            }
            else console.log(`${heroName} doesn't exist.`);
        }
    }

    let heroes = {};
    let line;

    while ((line = array.shift()) != 'End') {
        let [commName, heroName, spellName] = line.split(' ');
        let command = commands[commName](heroes, heroName, spellName);
    }
    console.log(`Heroes:`);

    let sorted = Object.entries(heroes)
        .sort(compare)
        .forEach(kvp => {
            console.log(`== ${kvp[0]}: ${kvp[1].join(', ')}`);
        });

    function compare([nameA, spellA], [nameB, spellB]) {
        let sizeA = spellA.length;
        let sizeB = spellB.length;

        return sizeB - sizeA || nameA.localeCompare(nameB);
    }
}

heroRecr(
    [
        'Enroll Stefan',
        'Enroll Pesho',
        'Enroll Stefan',
        'Learn Stefan ItShouldWork',
        'Learn Stamat ItShouldNotWork',
        'Unlearn Gosho Dispel',
        'Unlearn Stefan ItShouldWork',
        'End'
    ]
);

console.log(`------------------------------`);

heroRecr(
    [
        'Enroll Stefan',
        'Learn Stefan ItShouldWork',
        'Learn Stefan ItShouldWork',
        'Unlearn Stefan NotFound',
        'End'
    ]
);
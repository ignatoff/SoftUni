function thirdProblem(array) {

    let commands = {
        Add(heroes, heroName, health, energy) {

            [health, energy] = [health, energy].map(Number);

            if (!heroes.hasOwnProperty(heroName)) heroes[heroName] = { health, energy };
            else heroes[heroName].health += health;
        },
        Attack(heroes, attackerName, deffenderName, damage) {

            damage = Number(damage);

            if (heroes.hasOwnProperty(attackerName) && heroes.hasOwnProperty(deffenderName)) {
                heroes[deffenderName].health -= damage;
                heroes[attackerName].energy -= 1;

                if (heroes[deffenderName].health <= 0) {
                    console.log(`${deffenderName} was disqualified!`);
                    delete heroes[deffenderName];
                }

                if (heroes[attackerName].energy <= 0) {
                    console.log(`${attackerName} was disqualified!`);
                    delete heroes[attackerName];
                }
            }
        },
        Delete(heroes, heroName) {

            if (heroName == 'All') {

                for (const hero in heroes) delete heroes[hero];
            }
            else if (heroes.hasOwnProperty(heroName)) delete heroes[heroName];
        }
    }

    let heroes = {};
    let line;

    while ((line = array.shift()) != 'Results') {
        let [commName, ...args] = line.split(':');
        let command = commands[commName](heroes, ...args);
    }

    console.log(`People count: ${Object.keys(heroes).length}`);

    let sorted = Object.entries(heroes)
        .sort(compare)
        .forEach(kvp => {
            console.log(`${kvp[0]} - ${kvp[1].health} - ${kvp[1].energy}`);
        });

    function compare([nameA, infoA], [nameB, infoB]) {

        return infoB.health - infoA.health || nameA.localeCompare(nameB);
    }
}

thirdProblem(
    [
        'Add:Mark:1000:5',
        'Add:Clark:1000:3',
        'Attack:Clark:Mark:500',
        'Add:Allison:2500:5',
        'Attack:Clark:Mark:300',
        'Add:Charlie:4000:10',
        'Attack:Clark:Mark:500',
        'Results'
    ]
);

console.log(`--------------------------------`);

thirdProblem(
    [
        'Add:Bonnie:3000:5',
        'Add:Johny:4000:10',
        'Attack:Johny:Bonnie:400',
        'Add:Chicken:1000:1',
        'Add:Rabbit:3000:5',
        'Add:Buggy:1259:10',
        'Attack:Chicken:Rabbit:1000',
        'Results'
    ]
);

console.log(`--------------------------------`);

thirdProblem(
    [
        'Add:Bonnie:3000:5',
        'Add:Johny:4000:10',
        'Delete:All',
        'Add:Bonnie:3333:3',
        'Results'
    ]
);
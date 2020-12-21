function heroes(array) {

    let heroes = {};
    let n = Number(array.shift());

    for (let i = 0; i < n; i++) {
        let [name, hp, mp] = array.shift().split(' ');
        hp = Number(hp);
        mp = Number(mp);
        heroes[name] = {
            HP: hp,
            MP: mp
        };
    }
    let command = array.shift().split(' - ');

    while (command != 'End') {
        let action = command.shift();
        let name = command.shift();

        if (action == 'CastSpell') {
            let mpNeeded = Number(command.shift());
            let spellName = command.shift();

            if (heroes[name].MP >= mpNeeded) {
                heroes[name].MP -= mpNeeded;
                console.log(`${name} has successfully cast ${spellName} and now has ${heroes[name].MP} MP!`);
            } else {
                console.log(`${name} does not have enough MP to cast ${spellName}!`);
            }
        } else if (action == 'TakeDamage') {
            let damage = Number(command.shift());
            let attacker = command.shift();

            if (heroes[name].HP > damage) {
                heroes[name].HP -= damage;
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${heroes[name].HP} HP left!`);
            } else {
                console.log(`${name} has been killed by ${attacker}!`);
                delete heroes[name];
            }
        } else if (action == 'Recharge') {
            let amount = Number(command.shift());
            console.log(`${name} recharged for ${Math.min(200 - heroes[name].MP, amount)} MP!`);
            heroes[name].MP = Math.min(heroes[name].MP + amount, 200);
        } else if (action == 'Heal') {
            let amount = Number(command.shift());
            console.log(`${name} healed for ${Math.min(100 - heroes[name].HP, amount)} HP!`);
            heroes[name].HP = Math.min(heroes[name].HP + amount, 100);
        }
        command = array.shift().split(' - ');
    }
    Object.entries(heroes)
        .sort((a, b) => b[1].HP - a[1].HP || a[0].localeCompare(b[0]))
        .forEach(kvp => {
            console.log(kvp[0]);
            console.log(`  HP: ${kvp[1].HP}`);
            console.log(`  MP: ${kvp[1].MP}`);            
        });
}

heroes(
    [
        '4',
        'Adela 90 150',
        'SirMullich 34 77',
        'Ivor 91 111',
        'Tyris 67 131',
        'Heal - SirMullich - 50',
        'Recharge - Adela - 100',
        'Recharge - Tyris - 22',
        'CastSpell - Tyris - 1000 - Fireball',
        'TakeDamage - Tyris - 44 - Fireball',
        'TakeDamage - Ivor - 3 - Mosquito',
        'End'
    ]
);
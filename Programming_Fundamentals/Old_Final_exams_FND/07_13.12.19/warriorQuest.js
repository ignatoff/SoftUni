function warriorQuest(array) {

    let commands = {
        GladiatorStance(skill) {
            skill = skill.toUpperCase();
            console.log(skill);

            return skill;
        },
        DefensiveStance(skill) {
            skill = skill.toLowerCase();
            console.log(skill);

            return skill;
        },
        Dispel(skill, index, letter) {
            index = Number(index);

            if (index >= 0 && index < skill.length) {
                let left = skill.substring(0, index);
                let right = skill.substring(index + 1);
                skill = left + letter + right;
                console.log(`Success!`);
            } else {
                console.log(`Dispel too weak.`);
            }

            return skill;
        },
        TargetChange(skill, sub, second) {
            let i = skill.indexOf(sub);
            let left = skill.substring(0, i);
            let right = skill.substring(i + sub.length);
            skill = left + second + right;
            console.log(skill);

            return skill;
        },
        TargetRemove(skill, sub) {
            let i = skill.indexOf(sub);
            let left = skill.substring(0, i);
            let right = skill.substring(i + sub.length);
            skill = left + right;
            console.log(skill);

            return skill;
        }
    }

    let skill = array.shift();
    let line;

    while ((line = array.shift()) != 'For Azeroth') {
        let [commName, ...args] = line.split(' ');

        if (commName == 'Target') {
            commName = [commName];
            let word = args.shift();
            commName.push(word);
            commName = commName.join(' ');
        }

        if (commName != 'GladiatorStance' && commName != 'DefensiveStance' &&
            commName != 'Dispel' && commName != 'Target Change' && commName != 'Target Remove') {
            console.log(`Command doesn't exist!`);
            continue;
        }

        if (commName == 'Target Remove') commName = 'TargetRemove';
        else if (commName == 'Target Change') commName = 'TargetChange';

        skill = commands[commName](skill, ...args);
    }
}

warriorQuest(
    [
        'fr1c710n',
        'GladiatorStance',
        'Dispel 2 I',
        'Dispel 4 T',
        'Dispel 6 O',
        'Dispel 5 I',
        'Dispel 10 I',
        'Target Change RICTION riction',
        'For Azeroth'
    ]
);

console.log(`--------------------------------`);

warriorQuest(
    [
        'DYN4MICNIC',
        'Target Remove NIC',
        'Dispel 3 A',
        'DefensiveStance',
        'Target Change d D',
        'target change D d',
        'For Azeroth'
    ]
);
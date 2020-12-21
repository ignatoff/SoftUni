function bossRush(array) {

    let num = Number(array.shift());
    
    for (let i = 0; i < num; i++) {
        let line = array.shift();
        let sample = /\|(?<boss>[A-Z]{4,})\|:#(?<title>[A-Za-z]+ [A-Za-z]+)#/g;
        let match = sample.exec(line);

        if (match) {
            let name = match.groups.boss;
            let title = match.groups.title;
            console.log(`${name}, The ${title}
>> Strength: ${name.length}
>> Armour: ${title.length}`);            
        } else {
            console.log(`Access denied!`);            
        }
    }    
}

bossRush(
    [
        '3',
        '|GEORGI|:#Lead architect#',
        '|Hristo|:#High Overseer#',
        '|STEFAN|:#Assistant Game Developer#'
    ]
);

console.log(`----------------------`);

bossRush(
    [
        '3',
        '|PETER|:#H1gh Overseer#',
        '|IVAN|:#Master detective#',
        '|KARL|: #Marketing lead#'
    ]
);
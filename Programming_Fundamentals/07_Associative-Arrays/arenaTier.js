function arenaTier(array) {

    let gladiators = {};

    for (let info of array) {

        if (info == 'Ave Cesar') break;

        if (info.includes(' -> ')) {
            let [name, technique, skill] = info.split(' -> ');
            skill = Number(skill);

            if (!gladiators.hasOwnProperty(name)) {
                gladiators[name] = { [technique]: skill };
            } else {
                if (gladiators[name].hasOwnProperty(technique) && skill <= gladiators[name][technique]) {
                    continue;
                }
                gladiators[name][technique] = skill;
            }
        } else if (info.includes(' vs ')) {
            let [name1, name2] = info.split(' vs ');
            let isCommon = false;

            if (gladiators.hasOwnProperty(name1) && gladiators.hasOwnProperty(name2)) {

                for (const tech1 of Object.keys(gladiators[name1])) {

                    for (const tech2 of Object.keys(gladiators[name2])) {

                        if (tech1 == tech2) {
                            isCommon = true;
                        }
                    }
                }
                if (isCommon) {
                    let total = skill(name1, name2, gladiators);

                    if (total > 0) delete gladiators[name2];
                    else delete gladiators[name1];
                }
            }
        }
    }
    Object.entries(gladiators)
        .sort((a, b) => totalSkill(b[1]) - totalSkill(a[1]) || a[0].localeCompare(b[0]))
        .forEach(kvp => {
            console.log(`${kvp[0]}: ${totalSkill(kvp[1])} skill`);

            Object.entries(kvp[1])
                .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
                .forEach(kvp => {
                    console.log(`- ${kvp[0]} <!> ${kvp[1]}`);                    
                });
        });

    function totalSkill(ind) {
        let total = 0;
        Object.keys(ind).forEach(technique => total += Number(ind[technique]));
        return total;
    }

    function skill(n1, n2, obj) {
        let a = Object.values(obj[n1]).reduce((acc, c) => acc + c, 0);
        let b = Object.values(obj[n2]).reduce((acc, c) => acc + c, 0);
        return a - b;
    }
}

arenaTier(
    [
        'Peter -> Duck -> 400',
        'Julius -> Shield -> 150',
        'Julius -> Heal -> 150',
        'Gladius -> Heal -> 200',
        'Gladius -> Support -> 250',
        'Gladius -> Shield -> 250',
        'Peter vs Gladius',
        'Gladius vs Julius',
        'Gladius vs Maximilian',
        'Ave Cesar'
    ]
);
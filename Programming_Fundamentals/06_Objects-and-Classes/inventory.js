function inventory(array) {

    let list = [];

    for (const info of array) {
        let obj = {};
        let [name, level, items] = info.split(' / ');
        obj.Hero = name;
        obj.level = Number(level);
        obj.items = items.split(', ').sort().join(', ');
        list.push(obj);
    }
    list
        .sort((a, b) => a.level - b.level)
        .forEach(hero => {
            console.log(`Hero: ${hero.Hero}`);
            console.log(`level => ${hero.level}`);
            console.log(`items => ${hero.items}`);
        });
}

function inventory(array) {

    let heroes = [];

    array.forEach(line => {
        let info = line.split(' / ');
        let name = info[0];
        let level = Number(info[1]);
        let items = info[2].split(', ').sort((a, b) => a.localeCompare(b)).join(', ');
        heroes.push({name, level, items});
    });
    let sorted = heroes.sort((a, b) => a.level - b.level);

    sorted.forEach(obj => {
        console.log(`Hero: ${obj.name}\nlevel => ${obj.level}\nitems => ${obj.items}`);
    });    
}

inventory(
    [
        "Isacc / 25 / Apple, GravityGun",
        "Derek / 12 / BarrelVest, DestructionSword",
        "Hes / 1 / Desolator, Sentinel, Antara"
    ]
);
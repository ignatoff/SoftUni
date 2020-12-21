function legendary(str) {

    let items = {
        fragments: 'Valanyr',
        motes: 'Dragonwrath',
        shards: 'Shadowmourne',
    }
    str = str.toLowerCase();
    let array = str.split(' ');
    let needed = {
        fragments: 0,
        motes: 0,
        shards: 0,
    };
    let junk = {};
    let name = '';

    for (let i = 0; i < array.length; i += 2) {
        name = array[i + 1];
        let qty = Number(array[i]);

        if (needed.hasOwnProperty(name)) {
            needed[name] += qty;
            if (needed[name] >= 250) {
                needed[name] -= 250;
                console.log(`${items[name]} obtained!`);
                break;
            }
        }
        else if (!junk.hasOwnProperty(name)) junk[name] = qty;
        else if (junk.hasOwnProperty(name)) junk[name] += qty;
    }
    Object.entries(needed)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .forEach(([name, qty]) => {
            console.log(`${name}: ${qty}`);
        });

    Object.entries(junk)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([name, qty]) => {
            console.log(`${name}: ${qty}`);
        });
}

legendary('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');

console.log(`-------------------`);

legendary('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');


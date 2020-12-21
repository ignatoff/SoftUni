function catalogue(array) {

    let list = [];
    let groups = [];

    array.forEach(el => {
        let obj = {};
        let [item, price] = el.split(' : ');
        let letter = item[0];
        obj.item = item;
        obj.price = Number(price);
        if (!groups.includes(letter)) groups.push(letter);
        list.push(obj);
    });

    groups.sort();
    list.sort((a, b) => a.item.localeCompare(b.item));
    let j = 0;

    for (let i = 0; i < groups.length; i++) {
        console.log(groups[i]);
        
        while (list[j].item[0] == groups[i]) {
            console.log(`  ${list[j].item}: ${list[j].price}`);
            j++;
            if (j == list.length) break;
        }
    }
}

function catalogue(array) {

    let info = [];
    
    array.forEach(el => {
        let [item, price] = el.split(' : ');
        info.push({item, price});
    });

    let letter = '';
    info.sort((a, b) => a.item.localeCompare(b.item))
        .forEach(x => {

            if (letter != x.item[0]) {
                letter = x.item[0];
                console.log(letter);
            }
            console.log(`  ${x.item}: ${x.price}`);       
        });
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);
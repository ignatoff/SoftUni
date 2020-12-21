function minerTask(array) {

    let mine = {};

    for (let i = 0; i < array.length; i += 2) {
        let resource = array[i];
        let qty = Number(array[i + 1]);

        if (!mine.hasOwnProperty(resource)) mine[resource] = qty;
        else mine[resource] += qty;        
    }

    for (const [resource, qty] of Object.entries(mine)) {
        console.log(`${resource} -> ${qty}`);        
    }
}

minerTask(
    [
        'Gold',
        '155',
        'Silver',
        '10',
        'Copper',
        '17'
    ]
);
console.log(`------------------`);

minerTask(
    [
        'gold',
        '155',
        'silver',
        '10',
        'copper',
        '17',
        'gold',
        '15'
    ]
);
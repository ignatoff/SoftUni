function storage(array) {

    let storage = new Map();

    for (const line of array) {
        let [item, qty] = line.split(' ');
        qty = Number(qty);

        if (storage.has(item)) qty += storage.get(item);

        storage.set(item, qty);
    }

    for (const kvp of storage) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);        
    }
}

storage(
    ['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
);
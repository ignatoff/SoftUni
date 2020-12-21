function storeProvision(stock, order) {

    let inStore = {};

    for (let i = 0; i < stock.length; i += 2) {
        let name = stock[i];
        inStore[name] = Number(stock[i + 1]);
    }

    for (let i = 0; i < order.length; i += 2) {
        let name = order[i];

        if (inStore.hasOwnProperty(name)) {
            inStore[name] += Number(order[i + 1]);
        } else {
            inStore[name] = Number(order[i + 1]);
        }
    }
    Object.keys(inStore).forEach(key => {
        console.log(`${key} -> ${inStore[key]}`);        
    });
}

function storeProvision(stock, order) {

    let products = {};

    stock.forEach((el, i) => {
        if (i % 2 == 0) {
            let item = el;
            let quantity = Number(stock[i + 1]);
            products[item] = quantity;
        }
    });

    for (let i = 0; i < order.length; i += 2) {
        let item = order[i];
        let quantity = Number(order[i + 1]);

        if (products[item] === undefined) products[item] = 0;

        products[item] += quantity;
    }

    for (const key in products) {
        console.log(`${key} -> ${products[key]}`);
    }

}

storeProvision(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);
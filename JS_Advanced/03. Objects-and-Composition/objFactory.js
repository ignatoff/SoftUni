function factory(library, orders) {

    const result = [];

    for (let i = 0; i < orders.length; i++) {
        result.push(orders[i].template);

        for (let j = 0; j < orders[i].parts.length; j++) {
            const feature = orders[i].parts[j];
            result[i][feature] = library[feature];
        }
    }

    return result;
}
// for (let order of orders) {
//     const list = Object.assign({}, order.template);

//     for (const feature of order.parts) {
//         list[feature] = library[feature];
//     }
//     result.push(list)
// }

const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};
const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    },
];

const products = factory(library, orders);
console.log(products);
function townPop(array) {

    const registry = {};

    while (array.length) {
        let line = array.shift();
        let [name, pop] = line.split(' <-> ');
        pop = Number(pop);

        if (!registry.hasOwnProperty(name)) registry[name] = pop;
        else registry[name] += pop;
    }
    const info = Object.entries(registry).map(town => `${town[0]} : ${town[1]}`);

    return info.join('\n');
}

console.log(townPop(
    ['Sofia <-> 1200000',
        'Montana <-> 20000',
        'New York <-> 10000000',
        'Washington <-> 2345000',
        'Las Vegas <-> 1000000']
));

console.log(`-----------------------------`);

console.log(townPop(
    ['Istanbul <-> 100000',
        'Honk Kong <-> 2100004',
        'Jerusalem <-> 2352344',
        'Mexico City <-> 23401925',
        'Istanbul <-> 1000']
));

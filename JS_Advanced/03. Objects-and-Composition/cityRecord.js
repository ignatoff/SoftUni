function cityRecord(name, pop, treasury) {

    const city = {
        name,
        population: Number(pop),
        treasury: Number(treasury),
    };

    return city;
}

console.log(cityRecord('Tortuga', 7000, 15000));
console.log(cityRecord('Santo Domingo', 12000, 23500));

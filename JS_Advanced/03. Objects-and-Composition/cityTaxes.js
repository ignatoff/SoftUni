function cityTaxes(name, pop, treasury) {

    const city = {
        name,
        population: Number(pop),
        treasury: Number(treasury),
        taxRate: 10,
        collectTaxes() {
            city.treasury += city.population * city.taxRate;
        },
        applyGrowth(percent) {
            city.population += Math.floor(city.population * percent / 100);
        },
        applyRecession(percent) {
            city.treasury -= Math.ceil(city.treasury * percent / 100);
        },
    };

    return city; 
}

const result = cityTaxes('Tortuga', 7000, 15000);
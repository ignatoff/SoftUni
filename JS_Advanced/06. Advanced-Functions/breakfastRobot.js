function breakfastRobot() {
    const ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    const recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
        },
    }

    const commands = {
        prepare: (product, quantity) => {
            const data = [];

            Object.entries(recipes[product])
                .forEach(kvp => {
                    data.push([kvp[0], kvp[1] * quantity])
                });

            for (const [name, needed] of data) {                

                if (ingredients[name] - needed < 0) return `Error: not enough ${name} in stock`;
            }

            data.forEach(([name, needed]) => ingredients[name] -= needed);           
            return `Success`;
        },
        report: () => {
            return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
        },
        restock: (microelement, quantity) => {
            ingredients[microelement] += quantity;
            return `Success`;
        },
    }

    return function manager(arguments) {
        let [cmd, item, qty] = arguments.split(' ');
        qty = Number(qty);
        return commands[cmd](item, qty);
    }
}

let manager = breakfastRobot();

console.log(manager('restock protein 100'));
console.log(manager('restock carbohydrate 100'));
console.log(manager('restock fat 100'));
console.log(manager('restock flavour 100'));
console.log(manager('report'));
console.log(manager('prepare eggs 2'));
console.log(manager('report'));                 
console.log(manager('prepare eggs 1'));
console.log(manager('report'));
class ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    set budget(value) {
        if (value < 0) {
            throw new Error('The budget cannot be a negative number');
        }
        this._budget = value;
    }

    get budget() {
        return this._budget;
    }

    shopping([name, price]) {

        if (this.budget - price < 0) {
            throw new Error('Not enough money to buy this product');
        }
        this.budget -= price;
        this.products.push(name);

        return `You have successfully bought ${name}!`
    }

    recipes({ recipeName, productsList }) {
        productsList.forEach(pr => {
            if (this.products.includes(pr) == false) {
                throw new Error('We do not have this product');
            }
        });
        this.dishes.push({ recipeName, productsList });

        return `${recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish) {
        const isFound = this.dishes.find(d => d.recipeName == dish);
        if (!isFound) {
            throw new Error('We do not have this dish');
        }
        if (this.guests.hasOwnProperty(name)) {
            throw new Error('This guest has already been invited');
        }
        this.guests[name] = dish;

        return `You have successfully invited ${name}!`;
    }

    showAttendance() {
        let resultStr = ''
        for(let guest in this.guests) {
            let dishEaten = this.guests[guest]
            resultStr += `${guest} will eat ${dishEaten}, which consists of `
        for (let dishRow of this.dishes) {
            if (dishRow.recipeName === dishEaten) {
                resultStr += dishRow.productsList.join(", ") + "\n"
            }
        }
        }
        return resultStr.trim() 
    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
console.log(dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
}));

console.log(dinner.inviteGuests('Ivan', 'Oshav'));
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());

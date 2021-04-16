class Vacationer {
    constructor(fullName, creditCard) {
        this.fullName = fullName;
        this.idNumber = this.generateIDNumber();
        if (creditCard) {

            if (creditCard.length != 3) { throw new Error('Missing credit card information'); }

            const [cardNumber, expirationDate, securityNumber] = creditCard;

            if (typeof cardNumber != 'number' || typeof securityNumber != 'number') { throw new Error('Invalid credit card details'); }

            this.creditCard = { cardNumber, expirationDate, securityNumber };
        } else {
            this.creditCard = { cardNumber: 1111, expirationDate: '', securityNumber: 111 };
        }
        this.wishList = [];
    }

    get fullName() { return this._fullName; }

    set fullName(value) {

        if (value.length != 3) { throw new Error('Name must include first name, middle name and last name'); }

        const sample = /^([A-Z][a-z]+)$/g;

        for (const name of value) {
            let matcher = name.match(sample);

            if (!matcher) { throw new Error('Invalid full name'); }
        }
        const [firstName, middleName, lastName] = value;
        this._fullName = { firstName, middleName, lastName };
    }

    generateIDNumber() {
        let num = (231 * this._fullName.firstName.charCodeAt(0)) + (139 * this._fullName.middleName.length);
        const sample = /[aeoiu]/g;
        const last = this._fullName.lastName.length;
        const matcher = this._fullName.lastName[last - 1].match(sample);

        matcher ? num += '8' : num += '7';

        return num;
    }

    addCreditCardInfo(input) {

        if (input.length != 3) { throw new Error('Missing credit card information'); }

        const [cardNumber, expirationDate, securityNumber] = input;

        if (typeof cardNumber != 'number' || typeof securityNumber != 'number') { throw new Error('Invalid credit card details'); }

        this.creditCard = { cardNumber, expirationDate, securityNumber };
    }

    addDestinationToWishList(destination) {

        if (this.wishList.includes(destination)) { throw new Error('Destination already exists in wishlist'); }

        this.wishList.push(destination);
        this.wishList = this.wishList.sort((a, b) => a.length - b.length);
    }

    getVacationerInfo() {
        let result = `Name: ${this._fullName.firstName} ${this._fullName.middleName} ${this._fullName.lastName}\nID Number: ${this.idNumber}\nWishlist:\n`;

        this.wishList.length == 0 ? result += `empty\n` : result += `${this.wishList.join(', ')}\n`;

        result += `Credit Card:\nCard Number: ${this.creditCard.cardNumber}\nExpiration Date: ${this.creditCard.expirationDate}\nSecurity Number: ${this.creditCard.securityNumber}`;

        return result;
    }
}
let classInstance1 = new Vacationer(["Tania", "Ivanova", "Zhivkova"], [123456789, "10/01/2018", 777]);

console.log(classInstance1.getVacationerInfo());
// Name: Tania Ivanova Zhivkova
// ID Number: 203778
// Wishlist:
// empty
// Credit Card:
// Card Number: 123456789
// Expiration Date: 10/01/2018
// Security Number: 777
console.log(`----------------------------------`);

let classInstance2 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);

classInstance2.addDestinationToWishList('Spain');
classInstance2.addDestinationToWishList('Germany');
console.log(classInstance2.getVacationerInfo());
// Name: Vania Ivanova Zhivkova
// ID Number: 208398
// Wishlist:
// Spain, Germany
// Credit Card:
// Card Number: 1111
// Expiration Date: 
// Security Number: 111
/*
let classInstance1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"])
// let classInstance2 = new Vacationer(["Vania", "Ivanova", "Zhivk0va"])
// let classInstance3 = new Vacationer(["Tania", "Ivanova", "Zhivkova"], [123456789, "10/01/2018", 777]) 
let classInstance4 = new Vacationer(["Tania", "Ivanova", "Zhivkova"], ['123456789', "10/01/2018", 777])

// Initialize vacationers with 2 and 3 parameters
let vacationer1 = new Vacationer(["Vania", "Ivanova", "Zhivkova"]);
let vacationer2 = new Vacationer(["Tania", "Ivanova", "Zhivkova"],
    ['123456789', "10/01/2018", 777]);

// Should throw an error (Invalid full name)
try {
    let vacationer3 = new Vacationer(["Vania", "Ivanova", "Zhivkova"], ['123456789', "10/01/2018", 777]);
} catch (err) {
    console.log("Error: " + err.message);
}
*/
/*
// Should throw an error (Missing credit card information)
try {
    let vacationer3 = new Vacationer(["Zdravko", "Georgiev", "Petrov"]);
    vacationer3.addCreditCardInfo([123456789, "20/10/2018"]);
} catch (err) {
    console.log("Error: " + err.message);
}

vacationer1.addDestinationToWishList('Spain');
vacationer1.addDestinationToWishList('Germany');
vacationer1.addDestinationToWishList('Bali');

// Return information about the vacationers
console.log(vacationer1.getVacationerInfo());
console.log(vacationer2.getVacationerInfo());
*/
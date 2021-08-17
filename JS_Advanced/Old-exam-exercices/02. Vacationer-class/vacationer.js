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

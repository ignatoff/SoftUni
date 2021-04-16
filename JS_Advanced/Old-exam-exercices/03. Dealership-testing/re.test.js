const { expect } = require('chai');
const dealership = require('./dealership.js');

describe('tests', () => {

    describe('newCarCost', () => {
        it('should return same amount', () => {
            expect(dealership.newCarCost('a', 1)).to.equal(1);
        });

        it('should return discount', () => {
            expect(dealership.newCarCost('Audi A4 B8', 25000)).to.equal(10000);
        });
    });

    describe('carEquipment', () => {
        it('should return correct data, single element', () => {
            expect(dealership.carEquipment(['a'], [0])).to.deep.equal(['a']);
        });

        it('should return correct data, multi elements', () => {
            expect(dealership.carEquipment(['a', 'b', 'c'], [0, 2])).to.deep.equal(['a', 'c']);
        });

        it('should return correct data, single element', () => {
            expect(dealership.carEquipment(['a', 'b', 'c'], [1])).to.deep.equal(['b']);
        });
    });

    describe('euroCategory', () => {
        it('should return message, no discount', () => {
            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!');
        });

        it('should return message, with discount', () => {
            expect(dealership.euroCategory(5)).to.equal('We have added 5% discount to the final price: 14250.');
        });

        it('should return message, with discount, edge case', () => {
            expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.');
        });
    });
});
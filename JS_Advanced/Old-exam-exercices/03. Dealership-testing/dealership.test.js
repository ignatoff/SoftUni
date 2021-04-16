const { expect} = require('chai');
const dealership = require('./dealership.js');

describe('dealership', () => {
    describe('newCarCost', () => {
        it('return old car', () => {
            expect(dealership.newCarCost('Audi A4 B8', 30000)).equal(15000);
        });

        it('no discount', () => {
            expect(dealership.newCarCost('a', 1)).equal(1);
        });
    });

    describe('carEquipment', () => {
        it('return extras correct', () => {
            expect(dealership.carEquipment(['a'], [0])).deep.equal(['a']);
            expect(dealership.carEquipment(['a', 'b', 'c'], [0, 2])).deep.equal(['a', 'c']);
        });
    });

    describe('euroCategory', () => {
        it('return with low category', () => {
            expect(dealership.euroCategory(2)).equal('Your euro category is low, so there is no discount from the final price!');
        });

        it('return with treshold category', () => {
            expect(dealership.euroCategory(4)).equal(`We have added 5% discount to the final price: 14250.`);
        });

        it('return with high category', () => {
            expect(dealership.euroCategory(6)).equal(`We have added 5% discount to the final price: 14250.`);
        });

        it('return wrong price', () => {
            expect(dealership.euroCategory(4)).to.not.equal(`We have added 5% discount to the final price: 14251.`);
        });
    });
});
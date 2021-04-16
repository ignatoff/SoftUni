const { expect } = require('chai');
const pizzUni = require('./pizzUni.js');

describe('pizzUni', () => {
    describe('makeAnOrder', () => {
        it('return order', () => {
            const order = { orderedPizza: 'p', orderedDrink: 'd' };
            const order1 = { orderedPizza: 'p' };
            expect(pizzUni.makeAnOrder(order)).equal(`You just ordered p and d.`);
            expect(pizzUni.makeAnOrder(order1)).equal(`You just ordered p`);
        });

        it('throw error', () => {
            const order2 = { orderedDrink: 'd' };
            const order3 = {};
            expect(() => pizzUni.makeAnOrder(order2)).to.throw('You must order at least 1 Pizza to finish the order.');
            expect(() => pizzUni.makeAnOrder(order3)).to.throw('You must order at least 1 Pizza to finish the order.');
        });
    });

    describe('getRemainingWork', () => {
        it('return all are ready', () => {
            const arr = [{ pizzaName: 'p', status: 'ready' }];
            const arr1 = [{ pizzaName: 'p', status: 'ready' }, { pizzaName: 'pi', status: 'ready' }];

            expect(pizzUni.getRemainingWork(arr)).equal('All orders are complete!');
            expect(pizzUni.getRemainingWork(arr1)).equal('All orders are complete!');
        });

        it('return all are preparing', () => {
            const arr2 = [{ pizzaName: 'p', status: 'preparing' }];
            const arr3 = [{ pizzaName: 'p', status: 'preparing' }, { pizzaName: 'pi', status: 'preparing' }];

            expect(pizzUni.getRemainingWork(arr2)).equal(`The following pizzas are still preparing: p.`);
            expect(pizzUni.getRemainingWork(arr3)).equal(`The following pizzas are still preparing: p, pi.`);
        });
    });

    describe('orderType', () => {
        it('works with discount', () => {
            expect(pizzUni.orderType(10, 'Carry Out')).equal(9);
            expect(pizzUni.orderType(5, 'Carry Out')).equal(4.50);
        });

        it('works with no discount', () => {
            expect(pizzUni.orderType(10, 'Delivery')).equal(10);
            expect(pizzUni.orderType(5, 'Delivery')).equal(5);
        });

        it('does not work with discount', () => {
            expect(pizzUni.orderType(10, 'Carry Out')).to.not.equal(10);
            expect(pizzUni.orderType(5, 'Carry Out')).to.not.equal(4.60);
        });

        it('does not work with no discount', () => {
            expect(pizzUni.orderType(10, 'Delivery')).to.not.equal(9);
            expect(pizzUni.orderType(5, 'Delivery')).to.not.equal(4.50);
        });
    });
});
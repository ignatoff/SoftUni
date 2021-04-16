const {expect} = require('chai');
const pizzUni = require('./pizzUni.js');

describe("Tests", () => {

    describe("makeAnOrder", () => {

        it("should return pizza and drink", () => {
            expect(pizzUni.makeAnOrder({orderedPizza: 'a', orderedDrink: 'b'})).equal('You just ordered a and b.');
        });

        it("should return pizza", () => {
            expect(pizzUni.makeAnOrder({orderedPizza: 'a', orderedDrink: ''})).equal('You just ordered a');
        });

        it("should return error", () => {
            expect(() => pizzUni.makeAnOrder({orderedPizza: '', orderedDrink: 'b'})).to.throw('You must order at least 1 Pizza to finish the order.');
        });
     });

     describe("getRemainingWork", () => {

        it("should return all pizza ready", () => {
            expect(pizzUni.getRemainingWork([{pizzaName: 'a', status: 'ready' }])).equal('All orders are complete!');
        });

        it("should return pizza still preparing", () => {
            expect(pizzUni.getRemainingWork([{pizzaName: 'a', status: 'preparing' }])).equal('The following pizzas are still preparing: a.');
        });

        it("should return pizza still preparing", () => {
            expect(pizzUni.getRemainingWork([{pizzaName: 'a', status: 'preparing' }, {pizzaName: 'a', status: 'ready' }])).equal('The following pizzas are still preparing: a.');
        });
     });

     describe("orderType", () => {

        it("should return regular price", () => {
            expect(pizzUni.orderType(10, 'Delivery')).equal(10);
        });

        it("should return discount price", () => {
            expect(pizzUni.orderType(10, 'Carry Out')).equal(9);
        });
     });
});

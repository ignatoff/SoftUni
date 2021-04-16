const { expect } = require('chai');
const mathEnforcer = require('./mathEnforcer.js');

describe('Math enforcer', () => {
    describe('addFive', () => {
        it('returns undefined form wrong type param', () => {
            expect(mathEnforcer.addFive('js')).to.be.undefined;
        });

        it('returns undefined form wrong type param', () => {
            expect(mathEnforcer.addFive(true)).to.be.undefined;
        });

        it('returns NaN form wrong type param', () => {
            expect(mathEnforcer.addFive(NaN)).to.be.NaN;
        });

        it('returns 6', () => {
            expect(mathEnforcer.addFive(1)).equal(6);
        });

        it('returns -1', () => {
            expect(mathEnforcer.addFive(-6)).equal(-1);
        });

        it('returns 6.1', () => {
            expect(mathEnforcer.addFive(1.1)).equal(6.1);
        });
    });

    describe('subtractTen', () => {
        it('returns undefined form wrong type param', () => {
            expect(mathEnforcer.subtractTen('js')).to.be.undefined;
        });

        it('returns undefined form wrong type param', () => {
            expect(mathEnforcer.subtractTen(true)).to.be.undefined;
        });

        it('returns NaN form wrong type param', () => {
            expect(mathEnforcer.subtractTen(NaN)).to.be.NaN;
        });

        it('returns 1', () => {
            expect(mathEnforcer.subtractTen(11)).equal(1);
        });

        it('returns 0.1', () => {
            expect(mathEnforcer.subtractTen(10.1)).equal(0.09999999999999964);
        });

        it('returns -5', () => {
            expect(mathEnforcer.subtractTen(5)).equal(-5);
        });

        it('returns -15', () => {
            expect(mathEnforcer.subtractTen(-5)).equal(-15);
        });
    });

    describe('sum', () => {
        it('returns undefined form wrong type first param', () => {
            expect(mathEnforcer.sum([1], 2)).to.be.undefined;
        });

        it('returns undefined form wrong type second param', () => {
            expect(mathEnforcer.sum(2, 'js')).to.be.undefined;
        });

        it('returns NaN form wrong type first param', () => {
            expect(mathEnforcer.sum(NaN, 1)).to.be.NaN;
        });

        it('returns NaN form wrong type second param', () => {
            expect(mathEnforcer.sum(1, NaN)).to.be.NaN;
        });

        it('returns 4', () => {
            expect(mathEnforcer.sum(2, 2)).equal(4);
        });

        it('returns 4.4', () => {
            expect(mathEnforcer.sum(2.2, 2.2)).equal(4.4);
        });

        it('returns -4', () => {
            expect(mathEnforcer.sum(-2, -2)).equal(-4);
        });
    });
});
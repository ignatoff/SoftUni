const {expect} = require('chai');
const isOddOrEven = require('./evenOdd.js');

describe('Even or Odd', () => {
    it('returns undefined with wrong type input', () => {
        expect(isOddOrEven(23)).to.be.undefined;
    });

    it('returns undefined with wrong type input-2', () => {
        expect(isOddOrEven([23, 5])).to.be.undefined;
    });

    it('returns even', () => {
        expect(isOddOrEven('js')).equal('even');
    });

    it('returns odd', () => {
        expect(isOddOrEven('css')).equal('odd');
    });
});
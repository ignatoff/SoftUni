const {expect} = require('chai');
const numberOperations = require('./operations.js');

describe('numberOperations', () => {
    it('powNumber', () => {
        expect(numberOperations.powNumber(3)).equal(9);
    });

    it('numberChecker throw', () => {
        expect(() => numberOperations.numberChecker('a')).to.throw('The input is not a number!');
        expect(() => numberOperations.numberChecker({})).to.throw('The input is not a number!');
    });

    it('numberChecker', () => {
        expect(numberOperations.numberChecker(1)).equal('The number is lower than 100!');
        expect(numberOperations.numberChecker('5')).equal('The number is lower than 100!');
        expect(numberOperations.numberChecker(100)).equal('The number is greater or equal to 100!');
        expect(numberOperations.numberChecker('101')).equal('The number is greater or equal to 100!');
    });

    it('sumArrays equal arrays', () => {
        expect(numberOperations.sumArrays([1], [2])).deep.equal([3]);
        expect(numberOperations.sumArrays([1, 2, 3], [2, 3, 4])).deep.equal([3, 5, 7]);
    });

    it('sumArrays non-equal arrays', () => {
        expect(numberOperations.sumArrays([1], [2, 3])).deep.equal([3, 3]);
        expect(numberOperations.sumArrays([1, 2, 3], [2, 3, 4, 5])).deep.equal([3, 5, 7, 5]);
    });
});
const {expect} = require('chai');
const isSymmetric = require('./checkSymmerty.js');

describe('symmetric fn', () => {
    it('works with simple input', () => {
        expect(isSymmetric([1, 1])).to.be.true;
    });

    it('works with diff type elements', () => {
        expect(isSymmetric(['1', 1])).to.be.false;
    });
    
    it('works with complex input', () => {
        expect(isSymmetric(['a', 5, 'b', 5, 'a'])).to.be.true;
    });
    
    it('not works with asymmetric input', () => {
        expect(isSymmetric([1, 2, 2, 4])).to.be.false;
    });

    it('not works with invalid type input', () => {
        expect(isSymmetric('4')).to.be.false;
    });

    it('not works with invalid type input', () => {
        expect(isSymmetric({key: 'foe'})).to.be.false;
    });
});
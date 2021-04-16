const { expect } = require('chai');
const lookupChar = require('./lookupChar.js');

describe('Lookup Char', () => {
    it('returns undefined from first param', () => {
        expect(lookupChar(4, 2)).to.be.undefined;
    });

    it('returns undefined from second param', () => {
        expect(lookupChar('java', 'js')).to.be.undefined;
    });

    it('returns undefined from floating num', () => {
        expect(lookupChar('java', 1.5)).to.be.undefined;
    });

    it('returns Incorrect index from bigger num', () => {
        expect(lookupChar('js', 2)).equal('Incorrect index');
    });

    it('returns Incorrect index from negative num', () => {
        expect(lookupChar('js', -1)).equal('Incorrect index');
    });

    it('returns char on given index', () => {
        expect(lookupChar('js', 1)).equal('s');
    });

    it('returns char on given index', () => {
        expect(lookupChar('js', 0)).equal('j');
    });
});
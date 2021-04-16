const { expect } = require('chai');
const validator = require('./requestValidator.js');

describe('sdfgdf', ()=>{
    it('drh', ()=>{
        expect(validator({method: 'GET'})).to.be.false;
    })
});
const assert = require('chai').assert;
const sum = require('./sumNumbers')

describe('sum fn', () => {
    it('sums correct', () => {
        assert.equal(sum([1, 1]), 2);
    });
});
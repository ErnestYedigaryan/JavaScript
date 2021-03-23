const assert = require('chai').assert;
const C = require('../app'); 

describe('Calculations test', () => {
    const calc = C;

    it('check that calculation add returns number', () => {
        assert.isNumber(calc.add(1,2,3,4,5));
    });

    it('check that calculation multiply returns number', () => {
        assert.isNumber(calc.multiply(3,15));
    });

    it('check that calculation add(1,2,3,4,5) is equal to 15', () => {
        assert.equal(15, calc.add(1,2,3,4,5));
    });

    it('check that calculation nultiply(2,4,5) is equal to 40', () => {
        assert.equal(40, calc.multiply(2,4,5));
    });
});
const assert = require('chai').assert;
const expect = require('chai').expect;
const C = require('../app'); 
const axios = require('axios');

describe('Calculations test', () => {
    const calc = C;

    it('check that calculation add returns number', () => {
        const res = calc.add(1,2,3,4,5);
        assert.isNumber(res);
    });

    it('check that calculation multiply returns number', () => {
        assert.isNumber(calc.multiply(3,15));
    });

    it('check that calculation add(1,2,3,4,5) is equal to 15', () => {
        assert.equal(15, calc.add(1,2,3,4,5));
    });

    it('check that calculation minus(41,20) is equal to 21', () => {
        assert.equal(21, calc.minus(41,20));
    });

    it('check that calculation multiply(2,4,5) is equal to 40', () => {
        assert.equal(40, calc.multiply(2,4,5));
    });

    it('check that calculation division(27,3) is equal to 9', () => {
        assert.equal(9, calc.division(27,3));
    });

    it('check add is not NaN', () => {
        assert.isNotNaN(calc.add(27,3), 'is not NaN');
    });

    it('check if add has no args then returns  null', () => {
        const res = calc.add();
        expect(res).to.be.null;
    });

    it('check if multiply has no args then returns  null', () => {
        expect(calc.multiply()).to.be.null;
    });
});
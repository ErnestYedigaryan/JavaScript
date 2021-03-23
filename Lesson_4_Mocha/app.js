class Calculator {
    add(...arr) {
        return arr.reduce((acc, cur) => acc + cur, 0);
    }
    
    multiply(...arr) {
        return arr.reduce((acc, cur) => acc * cur, 1);
    }
}

const calc = new Calculator;

module.exports = calc;
class Calculator {
    add(...arr) {
        if(arr.length == 0) {
            return null;
        }

        return arr.reduce((acc, cur) => acc + cur, 0);
    }

    minus(a,b) {
        return a - b;
    }

    division(a,b) {
        return a / b;
    }
    
    multiply(...arr) {
        if(arr.length == 0) {
            return null;
        }
        
        return arr.reduce((acc, cur) => acc * cur, 1);
    }
}

const calc = new Calculator;


module.exports = calc;
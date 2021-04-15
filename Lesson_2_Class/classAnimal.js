// const { extends } = require("../.eslintrc");

class Animal {
    constructor(speed, name) {
        this.speed = 0,
        this.name = name;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}.`);
    }
}

class Dog extends Animal {
    constructor(age, color) {
        super(),
        this.age = age,
        this.color = color;
    }

    voice() {
        console.log(`${this.name} says gaf!`);
    }
}

class Cat extends Animal {
    constructor(age, color) {
        super(),
        this.age = age,
        this.color = color;
    }

    voice() {
        console.log(`${this.name} says meow!`);
    }
}

const dog = new Dog(10, 'black');
dog.name = 'Rex';
dog.run(12);
dog.voice();

const cat = new Cat(10, 'black');
cat.name = 'Bob';
cat.run(6);
cat.voice();
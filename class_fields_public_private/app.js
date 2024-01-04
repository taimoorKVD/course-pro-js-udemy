// ***
// Topic: public & private || Pro JS | 4th Jan, 2024 | Udemy | Mohammad Taimoor Hussain
// Usage: We can call public property or method outside of class but we can't call private property or method
// outside or directly from the class.
// ***

class Cat {
    static species = "felis catus";
    name;
    breed;
    #legs = 4;

    constructor(name, breed, legs) {
        this.name  = name;
        this.breed = breed;
        this.#legs = legs;
    }

    get legs() {
        return this.#legs;
    }

    set legs(value) {
        this.#legs = value;
    }

    #privateMethod() {
        return `I'm a private method!!!`;
    }

    publicMethod() {
        return this.#privateMethod();
    }
}

const blue = new Cat('sleepy', 'unknown', 4);

console.log(blue.legs);

blue.legs = 6;

console.log(blue.legs);

// ***
// this won't work as it is a private method which can't be accessible outside of the class.
// ***
//console.log(blue.#privateMethod());

console.log(blue.publicMethod());
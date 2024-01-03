// ***
// Topic: Inheritance || Pro JS | 3rd Jan, 2024 | Udemy | Mohammad Taimoor Hussain
// ***

class Triangle {
    constructor(a, b) {
        if(!Number.isFinite(a) || a <= 0)
            throw new Error(`Invalid a: ${a}`);

        if(!Number.isFinite(b) || b <= 0)
            throw new Error(`Invalid b: ${b}`);

        this.a = a;
        this.b = b;
    }

    getArea() {
        return (this.a * this.b) / 2;
    }

    getHypotenuse() {
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    }

    describe() {
        return `I am a triangle having area of ${this.getArea()} and hypotenuse of ${this.getHypotenuse()}`;
    }
}

class ShyTriangle extends Triangle {
    describe() {
        return `I'm a shy triangle.`;
    }

    beShy() {
        return `I'm always be shy.`;
    }
}
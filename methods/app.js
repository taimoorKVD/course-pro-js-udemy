// ***
// Topic: Methods || Pro JS | 3rd Jan, 2024 | Udemy | Mohammad Taimoor Hussain
// ***

class Triangle {

    constructor(a, b) {
        if(!Number.isFinite(a) || a <= 0)
            throw new Error(`Invalid a: ${a}`);

        if(!Number.isFinite(b) || b <= 0)
            throw new Error(`Invalid a: ${b}`);

        this.a = a;
        this.b = b;
    }

    getArea() {
        return (this.a * this.b) / 2;
    }

    getHypotenuse() {
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    }

    sayHi() {
        return `The triangle having side A of ${this.a} and side B of ${this.b} and Area of ${this.getArea()} says Hi.....`;
    }
}
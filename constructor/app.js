// ***
// Topic: Constructor || Pro JS | 3rd Jan, 2024 | Udemy | Mohammad Taimoor Hussain
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
}

const triangle = new Triangle(2, 3),
    triangle2 = new Triangle(4, 7);

console.log(triangle.getArea(), 'Triangle 1 | Area');
console.log(triangle.getHypotenuse(), 'Triangle 1 | Hypotenuse');

console.log(triangle2.getArea(), 'Triangle 2 | Area');
console.log(triangle2.getHypotenuse(), 'Triangle 2 | Hypotenuse');
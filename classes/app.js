// ***
// Topic: Classes || Pro JS | 2nd Jan, 2024 | Udemy | Mohammad Taimoor Hussain
// ***

class Triangle {
    getArea() {
        return (this.a * this.b) / 2;
    }

    getHypotenuse() {
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    }
}

const triangle = new Triangle(),
    triangle2 = new Triangle();
triangle.a = 3;
triangle.b = 4;

console.log(triangle.getArea(), 'Triangle 1 | Area');
console.log(triangle.getHypotenuse(), 'Triangle 1 | Hypotenuse');

console.log('--- Before assigning arbitrary values to Triangle 2 | GETS NAN ---');
console.log(triangle2.getArea(), 'Triangle 2 | Area');
console.log(triangle2.getHypotenuse(), 'Triangle 2 | Hypotenuse');

console.log('--- After assigning arbitrary values to Triangle 2 ---');

triangle2.a = 9;
triangle2.b = 19;
console.log(triangle2.getArea(), 'Triangle 2 | Area');
console.log(triangle2.getHypotenuse(), 'Triangle 2 | Hypotenuse');
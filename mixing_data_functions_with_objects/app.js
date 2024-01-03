// ***
// Topic: Mixing data & functions with objects USING POJO || Pro JS | 2nd Jan, 2024 | Udemy | Mohammad Taimoor Hussain
// ***

// ***
// Example 1
// ***

// ***
// Area of right triangle
// ***
function getTriangleArea(a, b) {
    return (a * b) / 2;
}

// ***
// Hypotenuse of right triangle
// ***
function getTriangleHypotenuse(a, b) {
    return Math.sqrt(a ** 2 + b ** 2);
}

// ***
// Output
// ***
console.log(getTriangleArea(1, 2));
console.log(getTriangleHypotenuse(3, 5));

console.log('---------- EXAMPLE 1 END ----------');

// ***
// Example 2 || Issue: It's not repeatable || Need to create multiple objects of myTriangle statically
// ***

let myTriangle = {
    a: 3,
    b: 8,
    getArea: function () {
        return (this.a * this.b) / 2;
    },
    getHypotenuse: function () {
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    },
    getSum: function () {
        return this.a + this.b;
    }
};

let myTriangle2 = {
    a: 3,
    b: 8,
    getArea: function () {
        return (this.a * this.b) / 2;
    },
    getHypotenuse: function () {
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    },
    getSum: function () {
        return this.a + this.b;
    }
};

let myTriangle3 = {
    a: 3,
    b: 8,
    getArea: function () {
        return (this.a * this.b) / 2;
    },
    getHypotenuse: function () {
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    },
    getSum: function () {
        return this.a + this.b;
    }
};

console.log(myTriangle.getArea(), 'Area');
console.log(myTriangle.getHypotenuse(), 'Hypotenuse');
console.log(myTriangle.getSum(), 'SUM');

myTriangle.a = 9;
myTriangle.b = 3;

console.log(myTriangle.getArea(), 'Area');
console.log(myTriangle.getHypotenuse(), 'Hypotenuse');
console.log(myTriangle.getSum(), 'SUM');

console.log('---------- EXAMPLE 2 END ----------');
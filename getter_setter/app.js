// ***
// Topic: getter & setter || Pro JS | 4th Jan, 2024 | Udemy | Mohammad Taimoor Hussain
// Usage: They structure like a function but behaves like an instance property of the class.
// Note : We can also add logic, conditions for that property using setter if needed.
// ***

class Circle {

    static allowedColors = new Set(['black', 'white', 'blue', 'green']);

    constructor(radius, color) {
        this.setRadius(radius);
        this.setColor(color);
    }

    // ***
    // method for validating the color
    // ***
    setColor(color) {
        if(!Circle.allowedColors.has(color)) {
            throw new Error(`This color ${color} is not allowed. Try another!`);
        }
        this._color = color;
    }

    // ***
    // method for validating the radius
    // ***
    setRadius(radius) {
        if(!Number.isFinite(radius) || radius <= 0) {
            throw new Error(`Invalid value of radius: ${radius}`);
        }
        this._radius = radius;
    }

    // ***
    // getter for the radius
    // ***
    get radius() {
        return this._radius;
    }

    // ***
    // getter for the diameter
    // ***
    get diameter() {
        return this.radius * 2;
    }

    // ***
    // getter for the color
    // ***
    get color() {
        return this._color;
    }

    // ***
    // setter for the radius
    // ***
    set radius(radius) {
        this.setRadius(radius);
    }

    // ***
    // setter for the color
    // ***
    set color(color) {
        this.setColor(color);
    }
}
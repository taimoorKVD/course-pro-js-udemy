// ***
// Topic: getter & setter || Test || Pro JS | 4th Jan, 2024 | Udemy | Mohammad Taimoor Hussain
// Test : write a logic to get fullName based on firstName and lastName, set new fullName if want.
// ***

class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName  = lastName;
    }

    // ***
    // getter for fullName
    // ***
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    // ***
    // setter for fullName
    // ***
    set fullName(name) {
        const [firstname, lastname] = name.split(" ");
        this.firstName = firstname;
        this.lastName = lastname;
    }
}
// ***
// Topic: Working with Objects USING POJO || Pro JS | 2nd Jan, 2024 | Udemy | Mohammad Taimoor Hussain
// ***

// ***
// we can initialize an object like these:
// ***
const obj1 = {};
const obj2 = new Object();

// ***
// we can set data into an object like these:
// ***
obj1.name = 'Mohammad Taimoor Hussain';
//obj2["name"] = 'Mohammad Taimoor Hussain';

// ***
// we can get data from an object like these:
// ***
console.log(obj1.name);
console.log(obj2["name"]);

// ***
// Major difference between the above is:
// ***

// Example 1
const key = "name";
console.log(obj2[key]);
console.log(obj1.key);

// Example 2
const keys = ['name'];
for (let i = 0; i < keys.length; i++) {
    let key = keys[i];

    console.log(obj1.key); //'key'
    console.log(obj2[key]); //'name'
}

// ***
// Keep in mind that all keys get stringified in an object:
// ***
const numbers = {};

numbers[true] = 'This is value of true';
numbers.false = 'This is value of false';
numbers[1] = 'This is value of 1';
numbers["@"] = 'This is value of @';
numbers["2"] = 'This is value of 2';

console.log(numbers);
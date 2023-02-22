// kelompok moscov

// Deklarasi variabel
let name = "John Doe";

// String literal
let message = `Hello, ${name}!`;

// Arrow function
const greet = (name) => `Hello, ${name}!`;

// Default parameter
const greetWithDefault = (name = "John Doe") => `Hello, ${name}!`;

// Rest parameter
const sum = (...numbers) => numbers.reduce((a, b) => a + b, 0);

// Spread parameter
const multiply = (multiplier, ...numbers) => numbers.map((number) => number * multiplier);

// Destructuring
const person = {
  firstName: "John",
  lastName: "Doe",
};
const { firstName, lastName } = person;

// Penggunaan
console.log(message);
console.log(greet(name));
console.log(greetWithDefault());
console.log(sum(1, 2, 3, 4, 5));
console.log(multiply(2, 1, 2, 3, 4, 5));
console.log(firstName, lastName);
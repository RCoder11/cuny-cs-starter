// Week 1 Session 1: Operators Practice
// Run this file using Code Runner (right-click > Run Code or Ctrl+Alt+N)

// Challenge 1: Temperature Converter
// TODO: Convert Celsius to Fahrenheit
// Formula: F = C * 9/5 + 32
let celsius = 25;

// Your code here
let Fahrenheit = celsius * 9/5 + 32;

// Challenge 2: Shopping Cart
// TODO: Calculate total with tax (8%)
let itemPrice = 19.99;
let quantity = 3;
let taxRate = 0.08;
// Your code here
let total = itemPrice * quantity;
let totalWithTax = total + (total * taxRate);
console.log(totalWithTax);

// Challenge 3: Simple Logic
// TODO: Check if a number is even AND greater than 10
let number = 14;
// Your code here
if (number % 2 === 0 && number > 10) {
    console.log("The number is even and greater than 10.");
}


// BONUS CHALLENGES
// 1. Create a tip calculator (15%, 18%, 20% options)
// 2. Check if a year is a leap year
// 3. Calculate BMI (weight in kg / height in meters squared)
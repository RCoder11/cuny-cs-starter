// Week 1 Session 2: Conditional Logic Practice

// Challenge 1: Grade Calculator
// TODO: Determine letter grade based on percentage
// A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60
let score = 85;
// Your code here
console.log(score)
if (score>=90) {
    grade = "A" ;}
else if (score>=80){
    grade = "B";
}else if (score>=70){
    grade = "C";
}else if (score>=60){
    grade = "D";
}else if (score<60){
    grade = "F";
}


// Challenge 2: Movie Ticket Pricing
// TODO: Calculate ticket price based on age and time
// Child (under 12): $8
// Adult (12-64): $12
// Senior (65+): $10
// Matinee discount (before 5pm): $2 off
let age = 30;
let isMatinee = true; // true if before 5pm
// Your code here
console.log(isMatinee)

if (age < 12) {
    ticketPrice = 8;}
if (age <=64){
    ticketPrice = 12;}


// Challenge 3: Weather Advisor
// TODO: Suggest activity based on temperature and conditions
// Hot (above 85): "Go swimming"
// Pleasant (60-85): "Go for a walk"  
// Cold (below 60): "Stay inside and watch a movie"
// If raining, always suggest "Stay inside" regardless of temperature
let temperature = 72;
let isRaining = false;
// Your code here

if (temperature > 85){
    activity = " Go swimming";}



// BONUS CHALLENGES
// 1. Create a simple game outcome decider (rock, paper, scissors)
// 2. Design a shipping cost calculator based on weight and destination
// 3. Build a password strength checker with multiple criteria
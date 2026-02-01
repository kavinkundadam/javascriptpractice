// Ternary Operator

// condition ? expressionIfTrue : expressionIfFalse;

// let variableName = condition ? expressionIfTrue : expressionIfFalse;

// let authenticated = true;
// let nextURL = authenticated
//   ? (alert('You will redirect to admin area'), '/admin')
//   : (alert('Access denied'), '/403');

// // redirect to nextURL here
// console.log(nextURL); // '/admin'


// Using multiple JavaScript ternary operators
let speed = 90;
let message = speed >= 120 ? 'Too Fast' : speed >= 80 ? 'Fast' : 'OK';

console.log(message);

// Switch Case

let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = 'Sunday';
    break;
  case 2:
    dayName = 'Monday';
    break;
  case 3:
    dayName = 'Tuesday';
    break;
  case 4:
    dayName = 'Wednesday';
    break;
  case 5:
    dayName = 'Thursday';
    break;
  case 6:
    dayName = 'Friday';
    break;
  case 7:
    dayName = 'Saturday';
    break;
  default:
    dayName = 'Invalid day';
}

console.log(dayName); // Tuesday


// Use se the prompt() function to get the input from the user:

let input = prompt(`Please enter a number between ${MIN} and ${MAX}` + hint);
// Code language: JavaScript (javascript)
// Note that the prompt() function only works on web browsers. If you run the code in another environment such as Node.js, please check the corresponding function.

// The prompt() function returns a string, therefore, you need to use the parseInt() function to convert it to an integer:


for (initializer; condition; iterator) {
    // statements
}

// Comma Operator

let x = 10;
let y = (x++, x + 1);

console.log(x, y); // 11, 12

let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let s = '';

for (let i = 0, j = 1; i < board.length; i++, j++) {
  s += board[i] + ' ';
  if (j % 3 == 0) {
    console.log(s);
    s = '';
  }
}
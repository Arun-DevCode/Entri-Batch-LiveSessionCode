// // Conditional Statements in Js
// console.log("Welcome to conditional Statement");

// // 1. if statement
const score = 51;
// console.log("Pass in exam");
// console.log("Fail in exam");

// DM - Part 1
if (score === 35) {
  console.log("Pass in exam");
} else {
  console.log("Fail in exam");
}

// DM - Part 2 - Grading
if (score > 50) {
  console.log("Grade A");
}

// // 3. if..else..if statement

const isAgeValid = 29;
const salary = 5000;

// Multiple decisions
if (isAgeValid <= 28) {
  console.log("Check 1 Passed..");
} else if (salary >= 50000) {
  console.log("Check 2 Passed.");
} else {
  console.log("You are not eligible. Because age limit exceed!");
}


// SWITCH Statements
//Conditional Statement in JS

// Switch - Working with multiple condition

/*
  switch(){
   case condition:
    //statement
   case condition:
    //statement
   default:
    // statement
  }
*/

// const day = 1;
// const days = ["Monday", "Tue", "Wed", "thursday", "Friday", "Sat", "Sunday"];

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Please provide a valid number between 1 to 7.");
// }

// 2. While loop
// let total = 1;

// while (total < 1) {
//     console.log(total*5);
//         total++; 
// }

// do ..while loop
let isUserHaveAccount = 10;

// do {
//   console.log("Welcome to Guest User");
//   isUserHaveAccount++
// } while (isUserHaveAccount < 5);

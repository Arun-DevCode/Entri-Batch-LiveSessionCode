// looping statements
// let i;
// for (i = 0; i < 10; i++) {
//   console.log("First Loop Iterate Count : ", i); // current iterate value
// //   console.log("Double",i++);
// }

// Looping Statements

// 1. For loop
// let i;
// for (i = 0; i < 10; i++) {
//   console.log("First Loop Iterate Count : ", i); // current iterate value
// //   console.log("Double",i++);
// }

// 2. while loop
/*
  while (condition){
    // statements
  }
*/
// Runs a block of codes as long as the condition is true
// Code stop - terminate

// example 
// let j =0;

// while(j<5){
//     console.log(j);
//     ++j;
//     console.log("Iterate:",j);
//     j++; // post increment
// }


// 3. do..while loop

/*
 syntax : 
  do {
  // statements
  } while (condition)
*/ 
// Runs the block at least once before checking the condition
// let i = 5;

//Example
// do{
//   console.log("Loop executed", i);
//   i++; // i becomes 6
// }while(i<0)

// 4. for..in loop
/*
 syntax : 
 for (key in object){
  // statements
 }
*/
// Used to loop through the keys (Properties) of an object.

//Object Example
// const person = {
//     name : "Abishek",
//     course : "FSD",
//     duration : "7 Months"
// };
// console.log(person.duration);

// Array Example
// const numbers = ['a','b','c','d','e']; // index starts at 0 - 4

// Example 
// for( index in numbers){
//  console.log(index);
// };

// 5. for..of loop
/*
 syntax :
  for(assume of word){
    //statements
  }
*/
// const fruits = ["Apple","Blueberry","cherry"];
//example
// for (healthy of fruits){
//   console.log(healthy);
// };

// for(index in fruits){
//   console.log(index);
// }

// 6. forEach
// fruits.forEach(healthy => {
//     console.log(healthy);
// });


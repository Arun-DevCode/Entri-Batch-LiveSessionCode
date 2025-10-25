// Looping In JS
/*
 1. for loop 
 2. while loop
 3. do..while loop 
 4. for..in loop 
 5. for ...of loop 
 6. break and continue 
*/

// 1. For loop
// let i;
// for(i=0;i<10;i++){
//   for(j=i+1;j<10;j++){
//     console.log(j);
//   }
// }

// 2. While loop
// let i=10
// while(i<10){
//     console.log("I ran!",i);
//     i++;
// }

// 3. do..while
// let i=10;
// do{
//  console.log("I ran First Time only!",i);
// //  i++
// }while(i<10)

// 4. for ..in loop
const numbers = [1,2,3,4,5];
console.log(typeof numbers);

const person = {
    name : "Testuser",
    profession : "tester",
    exp : 12,
    address: {
        street: "Noth street",
        city: "chennai"
    }
}
//  let number;
//  for(number in numbers ){
//    console.log(number);
//  }

 let OnePerson;
 for(OnePerson in person){
  console.log(person[OnePerson]);
 }

// for(number of numbers){
//   console.log(number);
// }

// for(OnePerson of person){
//  console.log(OnePerson);
// }

// for(let i=0;i<10;i++){
//     console.log(i);
//     if(1){
//         console.log(i);
//         // break;
//         continue;
//     }
// }
// Condition & Looping statements

// condition 
// const a = 10;
// const b = 10;
let a=null;
let b;
console.log(a,b);

// 1. if statement
if(a===b){
  console.log("Equal!")
}
if(a){
  console.log("Equal!");
}

// 2. if..else statement
// const password = ""
// if(password){
//   console.log("Valid password!");
// }else{
//     console.log("Invalid password! password should not be null or undefined, empty string!")
// }

// 3. if..else..if..else statement (Ladder Statements)

/*
  constrains : 
   1. Password should be more than 8 characters - 
   2. Password lower case(Small letters) and uppercase (capital letter)
   3. It should contains special characters includes - + @#!$%^&*() 
   4. Don't be empty- if..else

   Password Status : Strong , very strong , poor , average.
*/

// let password = "entri";

// if(password===""){
//    console.log("valid password!")
// }else if(password.length>=8){
//   console.log("Password contain 8 characters!")
// }else if(password===password){
//    console.log("Password contains uppercase");
// }else{
//     console.log("Password not contains uppercase");
// }

// else{
//     console.log("Password should be more than 8 characters.")
// }

// else{
//     console.log("invalid password.Do not be empty!")
// }

// Swtich Statement

let tamil = 45;
let english = 45;
let maths = 45;
let science = 45;
let socialScience = 45;
const total = 450;


// Student Mark Grading System
/*
switch(){
  case condition : 
  
  case condition : 

  ...

  default: 
     result statement
}
 */

// switch(total>0){
//    case total === 250:
//    console.log("Your B grade!");
//    break;
   
//    case total === 300:
//    console.log("Your B+ grade!");
//    break;
   
//    case total === 450:
//    console.log("Your A grade!");
//    break;
   
//    default :
//      console.log("Provide number value!")
// }


// 3. Ternary Operator 

/*
  Tenary Operator : True , false , null , undefined

   codition ? true : false - T / F

   null ? true : false - false

   undefined ? true : false - false
*/

let score=null;
// score=1
// ES5 : If..else
if(score){
 console.log("There!")
}else{
  console.log("Not!");
}

// ES6+ : Ternary Operator
console.log(score? "There" : "Not")
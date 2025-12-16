
// Function declaration
function Addition(num1=10,num2=15,num3=25){
  let total =0;
  total += num1 + num2 + num3
  return 5+5;
};


console.log(Addition(100, 200, 300));
// Addition(5);
// Addition(5);


// Types of function in JS

// 1. Function Declaration

// function Addition(num1){
//     return num1 + 10;
// }

// console.log(Addition(5));

// const number = "10";
// let number2 = number;
// console.log(typeof number2);

// function(num1,num2){
//    return num1 + num2
// }

// 2. Function expression

// let addition = function (num1, num2) {
//   console.log("Function Expression Declared!");
//   return num1 + num2;
// };

// console.log(typeof addition);
// addition=5;

// console.log(typeof addition);
// const total = addition(5,10)
// console.log(typeof total); 

// 3. Arrow Function 

const Addition = (num1,num2)=>{
    console.log(typeof num1)
    return num1 + num2;
};

// console.log(Addition("5",10))

// 4. Anonyoums Funtion - regular , arrow function expression

// function Calculator(message){
//    console.log(message())
//     return 
// }

// console.log(Calculator());
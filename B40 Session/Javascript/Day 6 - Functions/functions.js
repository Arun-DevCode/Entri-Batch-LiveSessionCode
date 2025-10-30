// const person = {
//     name : "test",
//     movie : "movie 1"
// }


// console.log(person)

// Functions in JS

//1. Named function 
function addition(){
  console.log("Function Executed!"); //  console Statement
  const a = 5;
  const b = 6;

  console.log(a+b)
}

// addition()


// 2. Function with parameter - parameterize function
// const e =0;
// console.log(e);

// function multiply(a=5,b=10,c=15){
//     console.log("a:",a);
//     console.log("b:",b);
//     console.log(c);
    
//     console.log(a+b+c)
// }

// const num1 = 5;
// const num2 = 6;

// multiply(5,6);
// multiply();
// multiply(200,100);

// 3. Function Expression

/*
  function(){
  
  }
*/

// const name = function(a,b){
//   console.log(a+b);
    
//   console.log("Function Expression Executed!");
  
// }
// name(5,6);

// 4. Arrow Function 

/*
  ()=>{}
*/

// const addition = (a=1,b=0)=>{
//     console.log(a+b);
    
//     console.log("Arrow function executed!");
// }


// addition(4,5);


// 5. Anonymous Function

// function calculator(a,b,addition){
//     console.log(typeof addition);
    
//   addition(a,b)
// }

// calculator(5,6,function(num1,num2){
//     console.log(num1+num2);
    
//     console.log("executed!")
// });

// calculator(10,10,function(num1,num2){
//     console.log(num1-num2)
// })


// 6. IIFE

// Before IIFE
// function notification(){
//     console.log("Payment Done");
// }
// notification(); // Manual Call

// After IIFE

// (function notification(){
//     console.log("Payment Done");
// })()

// function message(message,callback){
//     if(message === "morning"){
//          console.log(callback())
//     }else{
//         console.log(callback())
//     }
// }



// function GoodMorning(){
//     return "Good Morning! Have a nice day!"
// }
// function GoodAfternoon(){
//     return "Good Afternoon!"
// }
// message("morning",GoodMorning);
// message("afternoon",GoodAfternoon);

// function calculator(factor){
//     console.log(factor);
    
//    return function(num){
//     console.log(num)
//      return num * factor;
//     }
// }


// const double = calculator(2);
// console.log(double(5));
// console.log(double(15));

// 9. Constructor Function

// function Person(name,age){
//    this.name = name; 
//    this.age = age
// }

// const user = new Person("Testuser",12); // Function + Object

// console.log(user.age);

// function ReturnSomething(){

//     return 2
//     return 1
// }

// function* count(){
//   yield 1;
//   yield 2;
//   yield 3;
//   yield 4+5;
// }

// const counter = count();
// console.log(counter.next().value)
// console.log(counter.next().value)
// console.log(counter.throw());
// console.log(counter.next().value)
// Function & It's types

//1 . Regular Function

// a. Declaration - Function
function sayHello() {
  console.log("Hello everyone");
}
sayHello()

// b. Function with parameters
function greetings(name){
  console.log("Hi",name)
  return name
}
const result = greetings("Siva")
console.log(result)

// c. Function with expression
const multiply = function(x,z){
    return x * z;
}
console.log(multiply(4,5))
//Example - why
const name = "Siva"
console.log(typeof multiply);

// d. Function with default parameter
function onBoarding(username="Guest User"){
  console.log(username)
};

onBoarding();
// onBoarding("Yasmeen");

// e. Higher-Order function
function greetings(){
    return function(){
        return function(){
            return 20/4
        }
    }
}

const message = greetings();
const divider = message();
console.log(divider());

// 2. Arrow Functions

// a . Regular arrow function
const myFun = (a=10,b=10)=>{
    return () => console.log("Second order")
}
const total = myFun(5,5)
total();

// b. arrow function with callbacks
function calculator(x,y,callbacks){
    return callbacks(x,y)
}

const addition = (a,b) => {return a + b}; 
const sub = (a,b) => {return a - b}; 

const score = calculator(15,10,addition);
const subScore = calculator(34,56,sub)
console.log(subScore);




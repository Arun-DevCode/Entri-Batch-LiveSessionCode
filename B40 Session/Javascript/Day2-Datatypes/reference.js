// Reference Data type - Non-primitve data type

// Array 
/*
 syntax : [] - square brackets
 const numbers = [1,2,3,4,5,6,7]
*/
// const numbers = [1,2,3,4,5,6,7];
// const strings = ["Hi",'M',"everyone","Good night","D"];
// const booleans = [true,false,!true,!false];

// const mixedup = [1,"Hi",'M',"good morning",true , false];
// console.log(mixedup);

//Object - Two dimensional Collection
/*
 syntax : {} 
 value : property : value of property
 as : key : value
*/

// const person = {
//     name : "Test User",
//     email : "testuser@gmail.com",
//     password : "testuser123",
//     mobile : 98575393859,
//     course : "FSD",
//     isCompleted: false
// }

// // Dot notation (. (dot))
// console.log(person.name);
// console.log(person.mobile);

// Functions - Callable Object 

// const num1 = 5
// const num2 = 10
// const result = 15;

// const num3 = 10;
// const num4 = 10;
// const result = 20;

/*
 syntax : 

 function - keyword to create a callable object(Function)
 () - parenthises
 function myFunction(){
   // statements
 }
*/
// Function with parameter(variablename)
function addition(var1, var2){
    // console.log(var1=35);
    // console.log(var2);
    const num1 = var1;
    const num2 = var2;
    // console.log(num1+num2);
}

// Function Calling
// addition();

// call by value
addition(20,15); // 35


// Date - Date instance

const today =  new Date(); //YYYY/MM/DD - 12 Hours/24 Hours - UTC
console.log(today);
console.log(today.toDateString());
console.log(today.toISOString());
console.log(today.toLocaleDateString());
console.log(today.toLocaleTimeString());
console.log(today.toString());
console.log(today.toTimeString());
console.log(today.toUTCString());
console.log(today.valueOf());





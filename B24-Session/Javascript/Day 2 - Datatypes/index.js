// Data types in JS

// PRIMITIVE DATA TYPES

//1. Number - integer
let manoj = 9876543210;
console.log(manoj);

//2. String - ''- single quote , "" - Doubt quote
const username = "Manoj Kumar";
const initial = 'M';

//3.Boolean - True and false
console.log(4 == 5 );
// console.log(5 == 5 );

//4.Undefined 
let name;
// console.log(name);

//5. Null - Intentional Value
const DOJ = null;
// console.log(DOJ);

//6. Symbol
const customerId = Symbol("+91"); // +91-9876543210
// console.log(customerId);

//7. BigInt - Big Integer
const trillion = 122345667890123456
// console.log(trillion);



// Reference Data Type

// 1. Object - reference type
const bankDetails = {
    accountNo:180100004657847,
    name : "Siva",
    accountBalance : 101.95 
};

// console.table(bankDetails.name);

// 2. Array - Collection(string, number, object);
const subjectScore = [34,45,56,75,40];
console.log(subjectScore);

// 3. function - callable object - Statements
function myfun(){
    const username = "Siva";
    let password = "siva@123";
    console.log(username);
    console.log(password);
}
// myfun();

// 4. Date - Realtime
const date = new Date();

const days = ["Monday","Tuesday","Wed","Thus","Fri","Sat","Sunday"];

//Today
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMonth());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getDate());
console.log(date.getTime());

//Get Hours with minutes
console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);


// 5.RegEXp - skipped.

// 6. Map
const person = new Map(); // instance
person.set("name","Siva");
person.set("password","Siva@2025");
console.log(person);

// 7. Set - instance
const marks = new Set();
marks.add("siva");
marks.add("Yasmeen");
marks.add("Sanju");

console.log(marks);



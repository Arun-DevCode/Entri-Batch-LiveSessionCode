// Operators In JS

// 1. Arithmetic operator
// let a = 10;
// let b = 20;


// console.log(a+b);// Addition
// console.log(a-b);// Sub
// console.log(a*b);//Multiply
// console.log(a%b); // Divide
// console.log(a**2); // power of value
// console.log(a++); // Post-increment
// console.log(a);
// console.log(++a); // Pre-increment
// console.log(b--);
// console.log(b);
// console.log(--b);

// 2. Assignment Operator

// let a = 10;
// let b = 0;
// a=11;// Assign
// b=a+1;
// a+=5; // a = a + 5
// a-=1;
// a*=2
// a/=2
// a%=2;
// console.log(a);
// console.log(b);

// 3. Comparison Operator
// let a = 10;
// let b = 20;
// const amount = 1501;
//Loosely operator(EQUAL) from comparison
// console.log("+91"==91);
// console.log(10!=91); // ! =
// console.log(10<1); // ! =
// console.log(10>1); // ! =
// console.log(amount>=1500); // > =
// console.log(amount<=1500); // > =

// Strict(EQUAL) comparison - Type of value ? and value of type
// console.log(10===10);
// console.log("10"!=="10");// ! ==

// Logical Operator
// Operators : &&-AND(Nand), || , !!

// let a = true; // 1
// let b = false; // 0

// console.log(false&&false);
// console.log(false&&true);
// console.log(true&&false);
// console.log(true&&true);

// OR - Pipeline
// let a = 15; 
// let b = 11; // false
// let c = 13; // false
// let d = 13; // true
// console.log(a==b|| b==c || c==d||d==14);

// NOT 
let a = true; 
let b = false; // !->true->!->false
console.log(!b);
console.log(!!b);
console.log(!a);
console.log(!!a);

// String Operator
const c=5;
const d=10;

const e = "Entri"
const f = "App";
console.log(e+f); // plus

console.log(c+d); // plus->Addition

// Result : Entri App : 15
console.log("Entri"+"App:"+ true);

// Advacned in Operator 

// Ternary Operator
const x = 1;
const y =15;
// condition? true : false
console.log(x==y?true:false);

// Typeof operator
const username = "Entri";

const persons = {name:username}
const numbers = [1,2,3];

console.log(typeof true);
console.log(typeof 15);
console.log(typeof "15");
console.log(typeof "15");
console.log(typeof persons);
console.log(typeof numbers);

// Nullish Coalescing- ??
/*
  console.log((condition returns) ?? false)
*/
let n=null;
console.log(n);

const m = 13;

console.log(n??m);


// Optional Chaining
let person={name:""};
// syntax : ?.
console.log(person?.name);

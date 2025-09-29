// Memory Mangement
// Javascript Introduction & Basics - let,var,const

// Memory Type - initialization.
let phonenumber = 987654321;

// Memory Type - Declartion.
var password;

// console.log(password);
// console.log(phonenumber); // initial value

password = "entri@2025"; // value updated to declartion variable - 1st
// console.log(password);

phonenumber = 1;
// console.log(phonenumber); // initializer value updated here

phonenumber = 2;
password = "entri@2026"; // value updated to declartion variable - 2nd

// console.log(password);
console.log(phonenumber); // initializer value updated here - final


// Understanding - Variable Keyword Dive
let a = 20; // ES7+
var c = 20;
const e = 20;
console.log("Global scope - var");
console.log("lexical scope(let) - Global & Local scope");

if(5 < 10){
  console.log("local scope");
  let b = 20;
  console.log(b);
  console.log(b);
  console.log(b);
  console.log(b);
  var d = 20;
  console.log(e);
  const f =20;
}

// console.log(a); 
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(f);
// Array In JS


// A. Adding / Removing Functions
const numbers = [1,2,3,4,5,6,7,8,9,10];

// Iteration in array
// numbers.forEach((number,index)=>{
//    console.log(index)
// });


// Adding
// numbers.push(11);
// numbers.push(12);
// numbers.push(13);
// numbers[10]=11;
// numbers[11]=12;
// numbers[12]=13;
// numbers[13]=14;
// console.log(numbers);

// Poping
// numbers.pop()
// numbers.pop()
// numbers.pop()
// numbers[13]=''
// console.log(numbers);

// Adding at begin 
// numbers.unshift(4);
// numbers.unshift(5);
// numbers.unshift(6);
// numbers.unshift(7);
// numbers[0]=8;

// removing at begin
// numbers.shift()// 7
// numbers.shift()// 6
// numbers.shift()// 5
// numbers.shift()// 4
// numbers.shift()// 3

// Search and checking in array
// console.log(numbers.includes(1));
// console.log(numbers.indexOf(10))
// console.log(numbers.lastIndexOf(10));

// Transforming arrays
// numbers.map((number,index)=>{
//     // console.log(index);
//    console.log(number-2)
// })

// const result = numbers.filter((number)=>{
//    return number === 5
// })
// console.log(result);

// Realtime : Search & filter
const employees = [
    {name:"abishek",exp:5},
    {name:"Sanju",exp:5},
    {name:"nisha",exp:5},
    {name:"yasmeen",exp:5}
]
// const search= "sanjU";

// const filteredUser = employees.filter((employee)=>{
//     return employee.name.toLocaleLowerCase() === search.toLocaleLowerCase()
// })

// console.log(filteredUser);

// Reduce
// const products = [
//     {productName:"abishek",price:100},
//     {productName:"Sanju",price:100},
//     {productName:"nisha",price:100},
//     {productName:"yasmeen",price:100}
// ]

// const totalPrice = products.reduce((product,cur)=>{
//    console.log(product.price)
// },0)
// let total = 0;
// let sum = numbers.reduce((a,b)=>a+b,1)
// console.log(sum);

// console.log(totalPrice);


const integers = [1,2,3,4,[5,6],7,8,9,[10]]
// Before : flat
console.log(integers);

// After : flat
console.log(integers.flat());

const words = ["everyone","FSD"];

// console.log(words.flatMap((word)=>{
//     console.log(typeof word);
// }));

const alpha = ['b','a','c'];
// const deliveryDate = ["24/10/25","23/10/25","25/10/25"]
// console.log(deliveryDate.sort());
const name = "entri"; // irtne
console.log(alpha.reverse());
// console.log(name.split('').reverse());




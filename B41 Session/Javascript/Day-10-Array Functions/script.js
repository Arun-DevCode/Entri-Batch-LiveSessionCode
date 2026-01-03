// const person = {
//     name : "kavitha",
//     std : 10
// }

// // Key from person
// console.log(person["std"]); // key: string

// // Array
// const day = [1,2,3,4,5,6,7];

// // index from day
// console.log(day[1]); // indexing : number

//Array Sizing
const arr = [1, 2, , 3, 5, 7, , 9, 0]; // s-0 , e-6
//type
console.log(typeof arr);
console.log(arr.length);

// Storage-Adding value into array.

// Array functions

// 1. push() - method
// arr.push(49);
// console.log(arr);

// arr.pop(49)
// console.log(arr);

// arr.unshift(49);
// console.log(arr);

// arr.shift(49)
// console.log(arr);
// console.log(arr[0]=10);
// console.log(arr);

// Slice
// const slicedArr = arr.slice(0,8)
// console.log(arr)
// console.log(slicedArr);

// splice
// const splicedArr = arr.splice(0,3)
// console.log(splicedArr)
// console.log(arr);

// String methods
const str = "1+";
const searchKey = "1+";
console.log(str.toString());
console.log(str.toLowerCase());
console.log(str.toLocaleLowerCase() === searchKey.toLocaleLowerCase());

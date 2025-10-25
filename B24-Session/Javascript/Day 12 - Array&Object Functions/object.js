// const user= {
//     id: 1,
//     name: "Leanne Graham",
//     username: "Bret",
//     email: "Sincere@april.biz",
//     address: {
//       street: "Kulas Light",
//       suite: "Apt. 556",
//       city: "Gwenborough",
//       zipcode: "92998-3874",
//       geo: {
//         lat: "-37.3159",
//         lng: "81.1496"
//       }
//     }
// }

// console.log(user);
// Object Instances
// const person = new Object();
// person.name = "Entri";
// person.username="Entri App"
// console.log(person);



// 1. Object.keys() - User
// console.log(Object.keys(user))

// 2. Object.values
// console.log(Object.values(user));

// 3. Object.entries()
// console.log(Object.entries(user));

// B. Create or Merge Object
//1 . Object.assign(taget, source) - MERGE Objects;
// const contact = {
//     contact:{
//     phone : 98765433210,
//     linkedIn:"www.linkedin.com/bret-23485721"
// }
// }

const project = {
    Github : "www.github.com/arunCode/entri-livesessionCode"
}

// console.log(Object.assign(user,contact,project));
// const CovertedArray = Object.entries(project)
// Before : Entries to array
// console.log(CovertedArray);
// After : Object from coverted array
// Object.fromEntries()
// console.log(Object.fromEntries(CovertedArray));

const roles = {name: "Testuser",role:"user"}
// const array = [1,2,3]
// array[2]=4
// console.log(array);
// roles["role"]="manager"
// roles["role"]="Admin"
// console.log(roles);




// Control Object Behaviour
// 1. Object.freeze()
// Object.freeze(roles)
// roles["exp"]="5 Years"
// console.log(roles);

// 2. Object.seal() - you can update except adding / removing
// roles["role"] = "Admin"
// console.log(roles);

// 3.Object.seal(roles)
// roles["role"] = "Admin";
// roles["exp"]="5 Years";
// console.log(roles);

// Comparision and checks
const fruits  = {
    name1 :"apple",
    name2 : "banana",
    banana : 'banana'
}

// 1. Object.is()
// console.log(Object.is("entri","entri"));

// 2. Object.hasOwn()
//  console.log(Object.hasOwn(fruits,'name2'));

// 3. Object.getOwnPropertyNames()
const objectOfArray = Object.getOwnPropertyNames(fruits);
for(const item of objectOfArray){
    console.log(item);
    console.log(Object.hasOwn(fruits,item));
}

console.log(objectOfArray);

 




// // 3. includes(5) 
// const numbers = [5,10]
// console.log(numbers.includes(10));

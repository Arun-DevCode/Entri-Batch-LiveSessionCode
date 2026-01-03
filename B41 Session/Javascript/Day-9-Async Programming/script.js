// console.log("Process A");
// console.log(fetch("https://jsonplaceholder.typicode.com/users")); // It takes time. Return promise with pending.
// console.log("Process C");

// Async Timer in JS
// setTimeout(() => {
//   console.log("Hi everyone");
// }, 2000);// delay 2s

// 2. setInterval

// setInterval(()=>{
//     console.log("Learn Skills..")
// },1000)

// const promise = new Promise((resolve, reject) => {
//   const isUserLoggedIn = true;

//   if (isUserLoggedIn) {
//     resolve("User Account Found!");
//   } else {
//     reject("No User Found!");
//   }
// });

// promise
//   .then((res) =>  {
//     console.log(res)
//   })
//   .catch((err) => console.log(err)).finally(()=>console.log("Promise Resolved."))

// Asyn / await in JS

async function getData(URL) {
  const response = await fetch(URL);
  const data = await response.json(); // JSON -> Object
  // Print data
  console.table(data)
}

// Users
getData("https://jsonplaceholder.typicode.com/users");

// Posts
getData("https://jsonplaceholder.typicode.com/posts");

//Todos
getData("https://jsonplaceholder.typicode.com/todos");

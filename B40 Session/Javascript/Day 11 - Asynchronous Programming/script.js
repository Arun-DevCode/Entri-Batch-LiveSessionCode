// sync Programming in JS
// setTimeout(() => console.log("Process A"), 2000);
// console.log("Process B");
// console.log("Process C");
// setTimeout(() => console.log("Process D"), 5000);
// setTimeout(() => console.log("Process E"), 15000);

// const foodOne = new Promise((resolve, rejected) => {
//   const isFoodPrepared = false;
//   if (isFoodPrepared) {
//     resolve("Food Delivered..");
//   } else {
//     rejected("Order canceled!");
//   }
// });

// foodOne
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const fetchCall = new Promise((resolve, rejected) => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      resolve(data);
    })
    .catch((error) => {
      rejected(error);
    });
});

fetchCall
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

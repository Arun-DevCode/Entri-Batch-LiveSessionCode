console.log("promise starts");
const promise = new Promise((resolve, reject) => {
  const response = fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log("response :", data);
    })
    .catch((error) => {
      console.log(error);
    });

  resolve(response);
});

console.log(promise);

console.log("promise ends");

// WEB API
console.log("reading starts");

const users = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

console.log("reading ends");

const users1 = fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return console.log(data);
  });

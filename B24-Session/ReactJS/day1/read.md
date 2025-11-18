const fetchConfig = {
method: "GET",
headers: {
"Content-type": "application/json",
},
};
const response = await fetch(
"https://jsonplaceholder.typicode.com/todos",
fetchConfig
);
console.log(response);

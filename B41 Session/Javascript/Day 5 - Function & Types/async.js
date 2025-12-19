// Async function

async function getAllUsers() {
  console.log("Hi everyone.");
  //   const notReceived = fetch("https://jsonplaceholder.typicode.com/users");
  const received = await fetch("https://jsonplaceholder.typicode.com/users");
  //   console.log("Not Received:", notReceived);
  console.log("Received : ", received);
}

getAllUsers();

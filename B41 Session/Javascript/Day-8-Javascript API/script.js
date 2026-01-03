console.log("API Started");

// API in JS
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json(); // JSON -> OBJECT
  })
  .then((userdata) => {
    if (userdata.length === 0) {
      throw new Error();
    }
    console.table(userdata);
    // console.log("Empty array");
  })
  .catch((error) => {
    console.log(error);
  });

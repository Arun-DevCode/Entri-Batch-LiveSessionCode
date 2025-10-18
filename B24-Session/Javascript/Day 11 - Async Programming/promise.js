const zomato = new Promise((resolve, reject) => {
  const responseOne = fetch("https://jsonplaceholder.typicode.com/users"); // users
  const responseTwo = fetch("https://jsonplaceholder.typicode.com/posts"); // posts
  const responseThree = fetch("https://jsonplaceholder.typicode.com/photos"); // photos

  Promise.all([responseOne, responseTwo, responseThree])
    .then((responses) =>
      Promise.all(
        responses.map((res) => {
          res.json();
        })
      )
    )
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

// Usage
zomato
  .then(([users, posts, photos]) => {
    console.log("Users:", users);
    console.log("Posts:", posts);
    console.log("Photos:", photos);
  })
  .catch((err) => console.error("Error:", err));

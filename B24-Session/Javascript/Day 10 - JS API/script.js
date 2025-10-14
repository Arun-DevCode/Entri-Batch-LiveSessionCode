// console.log("Js Working..");

// // Fetch : Before success
// function getAllUser() {
//   const response = fetch("https://jsonplaceholder.typicode.com/users").then(
//     (res) => console.log(res)
//   );
//   console.log(response);
// }

// getAllUser();

const CommentsList = document.createElement("ul");
const body = document.getElementById("body");

// Fetch : After success
function AftergetAllUser() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (const comment of data) {
        const list = document.createElement("li");
        list.textContent = comment.name;
        CommentsList.appendChild(list);
        body.appendChild(CommentsList);
      }
      // console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

AftergetAllUser();

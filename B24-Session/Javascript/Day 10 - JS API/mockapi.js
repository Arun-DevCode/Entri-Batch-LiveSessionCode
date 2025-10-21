function getAllTodo() {
  const todo = {
    title: "Today have a session",
    description: "API IN JS",
    completed: false,
    date: 1761025229,
    id: "6",
  };
  const response = fetch("https://68f71c2cf7fb897c66148ac8.mockapi.io/plans", {
    method: "GET",
    // body: JSON.stringify(todo),
  })
    .then((response) => {
      return response.json(); // object
    })
    .then((data) => {
      console.log("Todo List :", data);
    })
    .catch((error) =>
      console.log("Failed to fetch plans from mockapi.io", error)
    );
}

// Button
const button = document.createElement("button");
button.addEventListener("click", getAllTodo);

const body = document.querySelector("body");
button.textContent = "call plans";
body.appendChild(button);

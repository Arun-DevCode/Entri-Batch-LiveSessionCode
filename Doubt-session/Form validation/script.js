const todo_storage = [
  {
    id: 1,
    title: "Buy groceries",
    completed: false,
  },
  {
    id: 2,
    title: "Complete assignment",
    completed: true,
  },
  {
    id: 3,
    title: "Read a book",
    completed: false,
  },
  {
    id: 4,
    title: "Walk the dog",
    completed: false,
  },
];

const List = document.createElement("ul");
const TodoContainer = document.querySelector(".todo-container");
const userInput = document.querySelector(".action");

function renderTodos() {
  List.innerHTML = ""; // clear old list

  todo_storage.forEach((todo) => {
    const listItem = document.createElement("li");

    const pTag = document.createElement("p");
    pTag.textContent = todo.title;

    const radioButton = document.createElement("input");
    radioButton.type = "radio";
    radioButton.name = "status";
    radioButton.checked = todo.completed;

    listItem.appendChild(pTag);
    listItem.appendChild(radioButton);
    List.appendChild(listItem);
  });

  TodoContainer.appendChild(List);
}

renderTodos();

userInput.addEventListener("change", (event) => {
  const todo = {
    id: todo_storage.length + 1, // safer id
    title: event.target.value,
    completed: false,
  };

  todo_storage.push(todo);
  event.target.value = ""; // clear input

  renderTodos();
});

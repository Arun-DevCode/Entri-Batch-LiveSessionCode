async function getAllComments() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();
  return data;
}

// Elements
const body = document.querySelector("body");
const list = document.createElement("ul");

getAllComments().then((comments, index) => {
  const pageStarts = 10;
  const pageEnds = 20;
  let count = 0;
  const paginatedData = comments.slice(pageStarts, pageEnds);
  for (const item of paginatedData) {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.name}-${++count}`;
    list.appendChild(listItem);
  }
  console.log(paginatedData);
});

body.appendChild(list);

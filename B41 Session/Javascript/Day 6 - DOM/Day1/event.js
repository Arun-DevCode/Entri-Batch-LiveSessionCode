// Selector
// const title = document.getElementsByTagName("h1");
const button = document.querySelector("button");

// check
// console.log(title);

//Adding interactivity to element
// function updateTitle() {
//   console.log("event triggered!");
//   title[0].textContent = "Update Event by click";
// }

// Click Events
// button.addEventListener("click",updateTitle);

// Change
// const inputTag = document.querySelector("input");
//Add event
// inputTag.addEventListener("change", (event) => {
//   const inputValue = event.target.value;
//   console.log(inputValue);
// });

// Scroll events
// document.addEventListener("scroll", (event) => {
//   console.log(event);
// });
// const formTag = document.querySelector("form");
// console.log(formTag);
// const inputTag = document.querySelector("input");
// console.log(inputTag);

// form submission
// function handleFormSubmission(event) {
//   console.log("form submitted!", event);
// }

// inputTag.addEventListener("change", (event) => {
//   const inputValue = event.target.value;
//   console.log(inputValue);
// });

// add form event
// button.addEventListener("submit", handleFormSubmission);

// Mouse event
// const h1Tag = document.querySelector("h1");

// h1Tag.addEventListener("mouseover", () => {
//   h1Tag.style.color = "blue";
// });

// h1Tag.addEventListener("mouseleave", () => {
//   h1Tag.style.color = "red";
// });

// document.addEventListener("contextmenu", () => {
//   console.log("mouse right clicked!");
// });

// document.addEventListener("contextlost", () => {
//   console.log("context menu closed!");
// });

// Keyboard events

const EnterButton = document.querySelector("button");

EnterButton.addEventListener("keypress", (event) => {
  console.log(event.key);
  if (event.key === "Enter") {
    console.log("Enter key is pressed");
  }
});

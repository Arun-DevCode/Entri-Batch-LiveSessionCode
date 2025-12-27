// ==============================
// EVENT HANDLING
// ==============================
/*
  1. addEventListener()
  2. removeEventListener()
*/

// Example
const btn = document.querySelector("button");

function handleClick() {
  console.log("Button clicked");
}

btn.addEventListener("click", handleClick);
btn.removeEventListener("click", handleClick);


// ==============================
// EVENT DELEGATION
// ==============================
/*
  1. Event bubbling
  2. target vs currentTarget
*/

// Example
const list = document.querySelector("ul");

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log(e.target.textContent);
  }
});

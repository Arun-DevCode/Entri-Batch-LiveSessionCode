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


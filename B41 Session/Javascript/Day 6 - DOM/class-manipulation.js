// ==============================
// CLASS MANIPULATION
// ==============================
/*
  1. classList.add()
  2. classList.remove()
  3. classList.toggle()
  4. classList.contains()
  5. classList.replace()
*/

// Example
// const box = document.querySelector(".box");

// box.classList.add("active");
// box.classList.remove("active");
// box.classList.toggle("highlight");
// box.classList.contains("active");
// box.classList.replace("old", "new");

// const h1Tag = document.querySelector("h1");
// const result = h1Tag.classList.contains("bg-h1");
// if (result) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }
// console.log(h1Tag);

// Add class
// h1Tag.classList.add("white-color-h1");

//Remove class
// h1Tag.classList.remove("bg-h1");

//Theme Toggle
const themeToggleButton = document.querySelector("button");
const body = document.querySelector("body");

// Theme change event
themeToggleButton.addEventListener("click", () => {
  const themeValue = body.classList.contains("light");
  // valid theme value
  if (themeValue) {
    body.classList.replace("light", "dark");
  } else {
    body.classList.replace("dark", "light");
  }
});

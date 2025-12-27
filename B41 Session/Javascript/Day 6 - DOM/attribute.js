// ==============================
// ATTRIBUTE METHODS
// ==============================
/*
  1. getAttribute()
  2. setAttribute()
  3. removeAttribute()
  4. hasAttribute()
*/

// Example
// const link = document.querySelector("a");

// link.getAttribute("href");
// link.setAttribute("target", "_blank");
// link.removeAttribute("title");
// link.hasAttribute("href");
// const button = document.querySelector("button");

// const inputTag = document.querySelector("input");
// console.log(inputTag.getAttribute("placeholder"));

// button.addEventListener("click", () => {
//   const typeValue = inputTag.getAttribute("type");
//   // Change type of input
//   if (typeValue === "password") {
//     // remove value in input
//     if (inputTag.hasAttribute("value")) {
//       console.log("Value attribute removed!");
//       inputTag.removeAttribute("value");
//     } else {
//       console.log("No value attribute found in input!");
//     }

//     inputTag.setAttribute("type", "text");
//   } else {
//     inputTag.setAttribute("type", "password");
//   }
// });

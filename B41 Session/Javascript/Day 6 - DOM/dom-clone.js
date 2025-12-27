// ==============================
// CLONING ELEMENTS
// ==============================
/*
  1. cloneNode(false)
  2. cloneNode(true)
*/

// Example
const original = document.querySelector(".card");
const clone = original.cloneNode(true);

document.body.appendChild(clone);

// ==============================
// CREATE & INSERT ELEMENTS
// ==============================
/*
  1. createElement()
  2. createTextNode()
  3. appendChild()
  4. append()
  5. prepend()
  6. insertBefore()
  7. insertAdjacentHTML() - Below
  
  // Positions: 'beforebegin', 'afterbegin', 'beforeend', 'afterend
*/

// Example
const li = document.createElement("li");
li.textContent = "New Item";

const list = document.querySelector("ul");
list.appendChild(li);
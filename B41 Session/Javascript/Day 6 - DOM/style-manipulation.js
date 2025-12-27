// ==============================
// STYLE MANIPULATION
// ==============================
/*
  1. style.property
  2. getComputedStyle()
*/

// Example
// const card = document.querySelector(".card");

// card.style.backgroundColor = "blue";
// card.style.padding = "20px";

// const styles = getComputedStyle(card);
// console.log(styles.fontSize);

const h1Tag = document.querySelector("h1");
const pTag = document.querySelector("p");

// Adding style to element
// h1Tag.style.color = "blue";
// h1Tag.style.fontSize = "12px";

// const styles = getComputedStyle(h1Tag);

// pTag.style.color = styles.color;
// console.log(pTag);

// Custom Style in JS
// const h1Styles = {
//   color: "red",
//   fontSize: "16px",
//   backgroundColor: "blue",
// };

// for (const styleProperty in h1Styles) {
//   h1Tag.style[styleProperty] = h1Styles[styleProperty];
// }
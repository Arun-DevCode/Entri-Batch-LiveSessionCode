// JS DOM Selectors
// 1. getElementById
const title = document.getElementById("title");
console.log(title);

// 2. getElementByTagName
const para = document.getElementsByTagName("p");
console.log(para[0]);

// 3. getElementByClassName
const container = document.getElementsByClassName("container");
console.log(container);

// 4. querySelector
// const listOfElement = document.querySelector(".box");
// console.log(listOfElement);

// 5. querySelectorAll
const listElements = document.querySelectorAll(".box");
console.log(listElements);

// Phase of DOM
// 1. Adding - Mounting
const body = document.querySelector("body");
const h4 = document.createElement("h4");
h4.textContent = "Mounted element";
body.appendChild(h4);
body.removeChild(h4);

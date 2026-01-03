console.log("Working..");

// 1. createElement()
const group = document.createElement("div");
// const groupText = document.createTextNode("Element Manipulation");
const h1Tag = document.createElement("h1");
const h2Tag = document.createElement("h2");
const h3Tag = document.createElement("h3");
h1Tag.textContent = "text";
const span = document.createElement("span");
const pTag = document.createElement("p");
// 2. appendchild()
// group.appendChild(h1Tag); // Node

// 3. append()
const body = document.querySelector("body");
body.append(h1Tag);
// body.insertBefore(h2Tag, group);
body.append(pTag);
body.appendChild(group);
body.prepend(span);
body.insertBefore(h3Tag, group);

pTag.insertAdjacentElement("beforeend", h2Tag);

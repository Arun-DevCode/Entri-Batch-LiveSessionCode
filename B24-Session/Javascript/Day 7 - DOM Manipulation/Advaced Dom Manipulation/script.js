// JS DOM - Selectors & Manipulation Functions
// DOM - Element Selecting
/*
  DOM SELECTORS Below : 
  1. getElementById()
  2. getElementByClassName()
  3. getElementByTagName()
  4. querySelector()
  5. querySelectorAll()
*/

/*
  DOM Manipulation Function - Property Function
  Manual Manipulation - update, create , remove 
  JS DOM Manipulation - inserting , appending , remove
*/

// Selecting
// const h1Tag = document.getElementsByTagName("h1");
// console.log(h1Tag[0]);

const body = document.querySelector("body");

// Manipulation
// 1. Create - Element / Node
const spanTag = document.createElement("span");
// const h1Tag = document.createElement("h1");
const h2Tag = document.createElement("h2");
const divTag = document.createElement("div");
const pTag = document.createElement("p");
const footerTag = document.createElement("footer");

// Append childs to parent node
// body.appendChild(spanTag);
body.append(divTag);
// body.append(h1Tag);
// divTag.appendChild(pTag);
// divTag.prepend(h1Tag);
// divTag.insertBefore(pTag, spanTag);
// divTag.appendChild(h2Tag);
// divTag.replaceChild(footerTag, h2Tag);
// divTag.removeChild(spanTag);

// Inserting
const welcomeText = "In progress , We learning DOM";
const fallbackText = "haven't started yet. Regular exrpession ";
// pTag.textContent = welcomeText;
// h1Tag.innerText = "Thank you";
// const name = "Thank yoou all";
divTag.innerHTML = `
<h1>Welcome to JS</h1/>
<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima veniam sunt voluptatum reprehenderit corporis veritatis tenetur odio vel maiores nobis quibusdam nostrum suscipit dolores, nisi quisquam et impedit dignissimos. Quasi.</p>
  <button>Learn More</button>
  <hr/>
  <form>
  <div>
  <label>Username</label>
   <input type = "text" required placeholder="johndoe"/>
  </div>
  <button type="submit">Submit</button>
  </form>
`;

const h1Tag = document.getElementsByTagName("h1");
console.log(h1Tag);

// inline Styling with .style - from JS
h1Tag[0].style.color = "red";

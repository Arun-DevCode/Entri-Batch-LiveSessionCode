// DOM SELECTOR
const button = document.getElementsByTagName("button");
// const para = document.getElementById("size");
// const container = document.getElementById("container");
const ContextDisplay = document.getElementById("demo");

// Event & Event Listeners
//Event Type
// function NotificationRemoved() {
//   console.log("Notification removed");
// }
function notifications() {
  //   alert("You clicked button!");
  confirm("Are you sure want to exit?");
}

// 1. Click
// button[0].addEventListener("click", notifications);

// 2. dbclick
// button[0].addEventListener("dblclick", notifications);

// 3. mouseout & mouseleave
// button[0].addEventListener("mouseout", notifications);
// button[0].addEventListener("mouseleave", notifications);
// button[0].addEventListener("mouseover", notifications);

// 4. Keydown & keyup
// button[0].addEventListener("keypress",NotificationRemoved)
// button[0].addEventListener("keydown", NotificationRemoved);
// button[0].addEventListener("keyup", NotificationRemoved);

// 5. Submit
// button[0].addEventListener("submit", notifications);

// 6. change - Collects user actions
// function collectUserName(event) {
//   console.log("Username:", event.target.value)
// }
// input.addEventListener("change", collectUserName);

// 7. load
// button[0].addEventListener("load", notifications);
// window.addEventListener("load", notifications);

// 8. resize
// function AdjustButtonResize() {
//   para.textContent = `width:${window.innerWidth}, Height: ${window.innerHeight}`;
// }
// window.addEventListener("resize", AdjustButtonResize);

// 9. Scroll
// function TofindScrollMeasurement() {
//   console.log(`Scroll-Y:${window.scrollY}px`);
// }

// window.addEventListener("scroll", TofindScrollMeasurement);

// 10 . ContextMenu
function ContextMenu() {
  alert("Context Menu Triggered!");
}
ContextDisplay.addEventListener("contextmenu", ContextMenu);

// Module - function to access hardware

/*
  Built-in Modules
  1. OS - Operating System
  2. fs - file system - write , read ?
  3. path - link
  
  // Node JS - Server Modules
  1. http  - localhost : domain (Development Server) | https : custom Domain (Production Server)
  2. events - Event Emitter (emit , on) - off , removeListener 
  3. URL - Browser URL
  4. Permissions
  5. Process
 */

// Module - Built-in / Third Party or Files

// A . OS - Operating System
// const os = require("os");

// // Operating System
// console.log(os.platform()); // Mac or Windows , Linux(Ubuntu)

// //Windows Arch
// console.log(os.arch()); // Mac or Windows , Linux(Ubuntu)

// //Windows Type
// console.log(os.type()); // Mac or Windows , Linux(Ubuntu)

// // Memory
// console.log(os.totalmem()); // Mac or Windows , Linux(Ubuntu)

// 3. Path - File URL

const path = require("path");

const currentFolderLocation = __dirname;
// const currentFile = __filename;
// console.log("Full File Path :", currentFolderLocation);

// Find Given Path location
// console.log(path.dirname(currentFile));

// Base Path
// console.log(path.basename(currentFolderLocation)); // index.js

// Join Path
// const filename = "app.js";
// const currentFileName = `index.js`;

// console.log(path.join(currentFolderLocation, filename));

// Pending Module
// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// emitter.on("order", (item) => {
//   console.log(`Order received: ${item}`);
// });
// emitter.once("order", (item) => {
//   console.log(`Order received: ${item}`);
// });

// Stop or remove listener
// emitter.removeListener("disconnection", () => {
//   console.log("removed!");
// });

// emitter.off("order", () => {
//   console.log("removed!!");
// });

// emitter.emit("order", "Laptop"); // Primary Button - 2 functions
// emitter.emit("order", "Mobile"); // Primary Button - 1 functions

/*
  (Method) - Property Functions

  1. on  - listener for event (Keep on)
  2. emit - Event Trigger
  3. Once - Listener for event (Only one)
  4. Off - remove listener
*/

// FS - File System
// const fs = require("fs");

// const content = ` hi everyone , node js alksjglksagjldskjgaldskajgldkajgldkjgadkdldskajgljsda`;

// fs.writeFile("./upload/test.txt", content, (err) => {
//   if (!err) console.log("File created");
// });

// fs.readFile("./upload/test.txt", (err, data) => {
//   const newData = new Buffer.from(data);
//   console.log(newData);
// });

// Browser Events - Already Defined - click

// Module - function to access hardware

/*
  Built-in Modules
  1. OS - Operating System
  2. fs - file system
  3. path - link
  
  // Node JS - Server Modules
  1. http, https
  2. events - Event Emitter (emit , on)
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
const filename ="app.js";
const currentFileName = `index.js`;

console.log(path.join(currentFolderLocation, filename));
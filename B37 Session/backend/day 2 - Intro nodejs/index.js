const path = require("path"); // Use module
const os = require("os");

// Moduel Notes
// path : D:\Entri-Session\Entri-Batch\B37 Session\backend\day 2 - Intro nodejs\index.js
// 1. path.basename() - return the file name from a path
const basename = path.basename("/user/docs/routine-docs/file.txt", ".txt");
// console.log(basename);
// 2. path.dirname() - returns the directory(Folders) name
const directoryNames = path.dirname("/user/docs/routine-docs/file.txt");
// console.log(directoryNames);

// 3. path.extname() - returns file extension.
const files = ["file.txt", "image.png", "google-sheet.csv"];
const extension = path.extname(files[2]);

// if (extension === ".csv") {
//   console.log("Valid format");
// } else {
//   console.log("Not Valid format");
// }

// 4. path.join() - joins multiple path segment(Block) into one(path)
// const resumePath = path.join("/profile","/resume.pdf");
// console.log(resumePath);

// 

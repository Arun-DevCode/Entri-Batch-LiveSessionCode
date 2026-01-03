// console.log("Working");

/*
 R - READ
 E - EXECUATION OR EVALUATE
 P - PLAN
 L - LOOP
*/

// Modules :

/*
  1. fs - File System
  2. Path
*/

// const fs = require("fs");

// WriteFileSync
// fs.writeFileSync("test.txt", "Hi everyone");

//ReadFile
// fs.readFile(
//   "D:Entri-Session/Entri-Batch/B24-Session/Backend/day2-introduction-node/test.txt",
//   (data) => {
//     console.log(data);
//   }
// );

// Path - Module

const path = require("path");

//Get current path
// console.log(__dirname);
// console.log(__filename);

// Path module
// console.log(path.dirname(__dirname))
// console.log(path.dirname(__filename));

// basename
// console.log(__filename);
// console.log(path.basename(__dirname));

// join
// const pathOfModule = path.dirname(__filename);
// console.log(
//   "D:Entri-Session/Entri-Batch/B24-Session/Backend/day2-introduction-node/test.txt"
// );
// console.log(path.basename(path.join(pathOfModule, "modules.js")));

// OS - Operating System
// const os = require("os");
// console.log(os.platform());
// console.log(os.arch())
// console.log(os.totalmem() / 1024 /1024);

// Events

const eventEmitter = require("events");

// Delcare event emitter
const emitter = new eventEmitter();

// Listener
emitter.on("message", () => {
  console.log("Event Triggered!");
});

emitter.on("entri-app", () => {
  console.log("Hi, everyone!");
});

// event trigger
emitter.emit("entri-app");
emitter.emit("message");
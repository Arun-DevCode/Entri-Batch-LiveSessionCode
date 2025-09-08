// //Import the http module
// const http = require("http");
// // Create server
// const server = http.createServer((request, response) => {
//   if (request.url === "/" || request.method === "GET") {
//     response.end("Welcome to Home Page");
//   }
// });

// // Server listening on port
// server.listen(4000, () => {
//   console.log("Server is running..");
// });

const path = require("path");
const os = require("os");
// const htmlFilePath = "D:\Entri Session\Entri Batch\B21 Session\backend\index.html"
// const currentFilePath = __filename;
// console.log("Current File Path: ", currentFilePath);
const currentFolderPath = __dirname;
console.log("Current Folder:", currentFolderPath);

//Path : JOIN
// const htmlFilePath = path.join(currentFolderPath, "index.html");
// console.log(htmlFilePath);

// Path : Multiple path -> JOIN
// const customPath = path.join(
//   "D:",
//   "Entri Session",
//   "Entri Batch",
//   "B21 Session",
//   "backend",
//   "package.json"
// );
// console.log("Custom Path:", customPath);

// path : BASENAME
// console.log(path.basename(currentFolderPath));

//path : extname - extension name
// console.log(path.extname(htmlFilePath));

//path : normailze  - > e.g home/about/../backend/index.html
// const examplePath = "D:/home/backend/index.html";
// console.log(path.normalize(examplePath));


//OS: Architecture
// console.log(os.arch());

//os : platform
// console.log(os.platform());

// OS : Type
// console.log(os.type());

//OS : release
// console.log(os.release());

// OS : uptime
// console.log(os.uptime())

// OS : hostname
console.log(os.hostname())
// fs
const fs = require("fs");
fs.writeFileSync("test.txt", "Hello Node.js");

// http
// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.write("Hello World");
//   res.end();
// });
// server.listen(3000);

// path
// const path = require("path");
// console.log(path.basename(__filename));

// os
// const os = require("os");
// console.log(os.platform());
// console.log(os.totalmem());

// events
// const EventEmitter = require("events");

// const emitter = new EventEmitter();

// emitter.on("message", () => {
//   console.log("Event triggered!");
// });

// emitter.on("notification", () => {
//   console.log("Event triggered!");
// });
// emitter.emit("message");
// emitter.emit("notification");

// url
// const { URL } = require("url");
// const myUrl = new URL("https://example.com/page?id=10");
// console.log(myUrl.searchParams.get("id"));

// stream
// const readStream = fs.createReadStream("test.txt");
// readStream.on("data", (chunk) => {
//   console.log(chunk.toString());
// });

// process
// console.log(process.env);
// console.log(process.argv);
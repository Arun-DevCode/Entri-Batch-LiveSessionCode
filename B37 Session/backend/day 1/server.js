const http = require("http");

const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end("Welcome to Server");
  }
  if (request.url === "/about") {
    const payload = { message: "We here to learn about backend." };
    response.end(JSON.stringify(payload));
  }
});

//Server Listen
server.listen(3000, () => console.log("Server runing.."));

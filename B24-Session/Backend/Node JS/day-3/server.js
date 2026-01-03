const http = require("http");
// Create Server
const server = http.createServer((request, response) => {
  // Request
  if (request.url === "/users" && request.method === "GET") {
    return response.end(JSON.stringify(users));
  }
});
//Server Listen
server.listen(3000, () => {
  console.log("Server running...");
});
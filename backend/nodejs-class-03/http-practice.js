const http = require("http");

// Sample users
let users = ["Ali", "Ahmed"];

const server = http.createServer((req, res) => {

  // Home route
  if (req.url === "/" && req.method === "GET") {
    res.end("Home Page");
  }

  // About route
  else if (req.url === "/about" && req.method === "GET") {
    res.end("About Page");
  }

  // Get users
  else if (req.url === "/users" && req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(users));
  }

  // Add user (simple POST simulation)
  else if (req.url === "/users" && req.method === "POST") {
    users.push("New User");
    res.end("User Added");
  }

  // 404
  else {
    res.statusCode = 404;
    res.end("Page Not Found");
  }

});

server.listen(3000, () => {
  console.log("HTTP Server running on port 3000");
});
console.log("My backend started ");
console.log("Hello Akhlaque! Welcome to Node.js ");

// Variables
const name = "Akhlaque Ahmed";
const city = "Karachi";
const course = "Web Development";

console.log("my name is " + name + ", city is " + city + " and course is " + course);
console.log(`my name is ${name}, city is ${city} and course is ${course}`);

// Core Modules
const http = require("http");
const fs = require("fs");

// File System Practice
fs.writeFileSync("test.txt", "Hello from Node.js");

// Create Server
const server = http.createServer((req, res) => {
  console.log("req ==>", req.url);

  // Home Route
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("You are welcome to our server!");
  }

  // Products Route
  else if (req.url === "/products") {
    res.writeHead(200, { "Content-Type": "application/json" });

    const products = {
      products: [
        { id: 1, title: "product 1" },
        { id: 2, title: "product 2" }
      ]
    };

    res.end(JSON.stringify(products));
  }

  // Todos Route
  else if (req.url === "/todos") {
    res.writeHead(200, { "Content-Type": "application/json" });

    const todos = {
      todos: [
        { id: 1, title: "todo 1" },
        { id: 2, title: "todo 2" }
      ]
    };

    res.end(JSON.stringify(todos));
  }

  // 404 Route
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("This item is not available!");
  }
});

// Start Server
server.listen(4000, () => {
  console.log("Server running at http://localhost:4000");
});
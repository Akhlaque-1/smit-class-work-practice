console.log("My backend started 🚀");
console.log("Hello Akhlaque! Welcome to Node.js 🚀");

const name = "Akhlaque Ahmed";
const city = "Karachi";
const course = "Web Development";
console.log("my name is " + name + ", city is " + city + " and course is " + course);
console.log(`my name is ${name}, city is ${city} and course is ${course}`);



const http = require('http');
const server = http.createServer((req, res) => {
  res.write("My First Node.js Server");
  res.end();
});
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});

const fs = require ('fs');
fs.writeFileSync('test.text', 'Hello How R U from Node.js');

const http = require('http');
const server = http.createServer((req , res) => {
    res.write("Welcome to Akhlaque's Server");
    res.end();
});
server.listen(3000, () =>{
console.log("Server running at http://localhost:3000");
});


const fs = require('fs');
fs.writeFileSync('test.txt', 'Hello from Node.js');

const http = require("http");

const server = http.createServer((req, res) => {
  console.log("req ==>", req.url);

  // Home Route
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("You are welcome to our server!");
  }

  // Products Route
  else if (req.url.startsWith("/products")) {
    res.writeHead(200, { "Content-Type": "application/json" });

    const products = {
      Product: [
        { id: 1, title: "product 1" },
        { id: 2, title: "product 2" }
      ]
    };

    res.end(JSON.stringify(products));
  }

  // Todos Route
  else if (req.url.startsWith("/todos")) {
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

server.listen(4000, "127.0.0.1", () => {
  console.log("Server is up and running on PORT: 4000");
});
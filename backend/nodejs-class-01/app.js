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


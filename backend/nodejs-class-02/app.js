const fs = require("fs");
fs.writeFileSync("file.txt", "This was created by using node.js");


fs.writeFileSync("file.txt", "Hello from Akhlaque");

fs.appendFileSync("file.txt", "\nNew line added!");

const data = fs.readFileSync("file.txt", "utf-8");
console.log(data);

const express = require("express");
const app = express();
const PORT = 4000;


// Middleware (future use ke liye)
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send(" Welcome to My Express API");
});


// All products
app.get("/products", (req, res) => {
  const products = [
    { id: 1, name: "Shirt", price: 1200 },
    { id: 2, name: "Jeans", price: 2500 },
    { id: 3, name: "Shoes", price: 5000 }
  ];

  res.json(products);
});



// Single product (practice route)
app.get("/products/:id", (req, res) => {
  const id = req.params.id;

  res.json({
    message: "Single product fetched",
    product: {
      id: id,
      name: `Product ${id}`
    }
  });
});


// Server start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



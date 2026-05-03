const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Data
let products = [
  { id: 1, name: "Shoes", price: 2000 },
  { id: 2, name: "Mobile", price: 50000 },
  { id: 3, name: "Laptop", price: 120000 },
];

// Routes

// Home
app.get("/", (req, res) => {
  res.send("Welcome to My Store API");
});

// Get all products
app.get("/api/products", (req, res) => {
  res.json({
    success: true,
    data: products,
  });
});

// Add product
app.post("/api/products", (req, res) => {
  const { name, price } = req.body;

  const newProduct = {
    id: products.length + 1,
    name,
    price,
  };

  products.push(newProduct);

  res.json({
    success: true,
    message: "Product added successfully",
  });
});

// Delete product
app.delete("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id);

  products = products.filter((p) => p.id !== id);

  res.json({
    success: true,
    message: "Product deleted",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
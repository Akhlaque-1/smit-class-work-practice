const fs = require("fs");
const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

/*
========================
 FILE PRACTICE ROUTES
========================
*/

// Create / overwrite file
app.get("/write", (req, res) => {
  fs.writeFileSync("file.txt", "Hello from Node.js");
  res.send("File written successfully ");
});

// Append + Read file
app.get("/append", (req, res) => {
  fs.appendFileSync("file.txt", "\nNew line added");
  const data = fs.readFileSync("file.txt", "utf-8");

  res.send(data);
});

// Read file with error handling
app.get("/read", (req, res) => {
  try {
    const data = fs.readFileSync("file.txt", "utf-8");

    res.status(200).json({
      message: "File read successfully ",
      content: data
    });

  } catch (error) {
    res.status(500).json({
      error: "File not found "
    });
  }
});

/*
========================
 USER ROUTES
========================
*/

let users = [];

// Get all users
app.get("/users", (req, res) => {
  res.json(users);
});

// Add user
app.post("/users", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).send("Name is required");
  }

  users.push(name);
  res.send("User Added ");
});

// Delete user
app.delete("/users/:name", (req, res) => {
  const name = req.params.name;

  const index = users.indexOf(name);

  if (index === -1) {
    return res.status(404).send("User not found ");
  }

  users.splice(index, 1);
  res.send("User Deleted ");
});

/*
========================
 PRODUCT ROUTE
========================
*/

// Dynamic route
app.get("/product/:name", (req, res) => {
  res.send(`Product: ${req.params.name}`);
});

/*
========================
 ORDER ROUTES
========================
*/

let orders = [];

// Create order (query params)
app.get("/order", (req, res) => {
  const { item, qty } = req.query;

  if (!item || !qty) {
    return res.status(400).send("Item and quantity required ");
  }

  orders.push({ item, qty });

  res.send(`Order placed: ${item} (${qty}) `);
});

// Get all orders
app.get("/orders", (req, res) => {
  res.json(orders);
});

/*
========================
 BASIC ROUTES
========================
*/

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

/*
========================
 SERVER
========================
*/

app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
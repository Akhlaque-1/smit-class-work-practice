const express = require("express");
const app = express();

app.use(express.json());

// In-memory data
let users = ["Ali", "Ahmed"];
let orders = [];

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

app.get("/contact", (req, res) => {
  res.send("Contact Page");
});

/*
========================
    USER ROUTES
========================
*/

// Get users
app.get("/users", (req, res) => {
  res.json(users);
});

// Add user
app.post("/users", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.send("Name is required");
  }

  users.push(name);
  res.send("User Added");
});

// Delete user
app.delete("/users/:name", (req, res) => {
  const name = req.params.name;

  const index = users.indexOf(name);

  if (index === -1) {
    return res.send("User not found");
  }

  users.splice(index, 1);
  res.send("User Deleted");
});

/*
========================
  DYNAMIC ROUTE
========================
*/

app.get("/product/:name", (req, res) => {
  res.send(`Product: ${req.params.name}`);
});

/*
========================
  ORDER ROUTES
========================
*/

// Create order (query params)
app.get("/order", (req, res) => {
  const { item, qty } = req.query;

  if (!item || !qty) {
    return res.send("Please provide item and quantity");
  }

  orders.push({ item, qty });

  res.send(`Order placed: ${item} (${qty})`);
});

// Get all orders
app.get("/orders", (req, res) => {
  res.json(orders);
});

/*
========================
  SERVER
========================
*/

app.listen(3000, () => {
  console.log("Express Server running on http://localhost:3000");
});
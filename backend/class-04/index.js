const express = require("express");
const app = express();
app.use(express.json());


// Import routes

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

// Use routes
app.use("/products", productRoutes);
app.use("/users", userRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API Running...");
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});
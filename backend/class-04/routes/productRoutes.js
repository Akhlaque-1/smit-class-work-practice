const express = require("express");
const router = express.Router();

const {
  getProducts,
  createProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// Routes
router.get("/", getProducts);
router.post("/", createProduct);
router.get("/:id", getSingleProduct);
router.put("/:id", updateProduct);     // ✅ UPDATE
router.delete("/:id", deleteProduct);  // ✅ DELETE

module.exports = router;
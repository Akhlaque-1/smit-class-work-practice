// Fake data (later will come from DB)
const products = [
  { id: 1, name: "Product 1", price: 100 },
  { id: 2, name: "Product 2", price: 200 },
];

// GET all products
const getProducts = (req, res) => {
  res.json({
    message: "All products",
    data: products,
  });
};

// CREATE product
const createProduct = (req, res) => {
  console.log("BODY:", req.body);

  if (!req.body) {
    return res.status(400).json({
      message: "Request body is missing",
    });
  }

  const { name, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({
      message: "All fields required",
    });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price,
  };

  products.push(newProduct);

  res.status(201).json({
    message: "Product created successfully",
    data: newProduct,
  });
};

// GET single product
const getSingleProduct = (req, res) => {
  const product = products.find((p) => p.id == req.params.id);

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  res.json({
    message: "Product found",
    data: product,
  });
};

// UPDATE product
const updateProduct = (req, res) => {
  const { id } = req.params;

  if (!req.body) {
    return res.status(400).json({ message: "Body missing" });
  }

  const { name, price } = req.body;

  const product = products.find((p) => p.id == id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  if (name) product.name = name;
  if (price) product.price = price;

  res.json({
    message: "Product updated successfully",
    data: product,
  });
};

// DELETE product
const deleteProduct = (req, res) => {
  const { id } = req.params;

  const index = products.findIndex((p) => p.id == id);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  const deleted = products.splice(index, 1);

  res.json({
    message: "Product deleted successfully",
    data: deleted[0],
  });
};

module.exports = {
  getProducts,
  createProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
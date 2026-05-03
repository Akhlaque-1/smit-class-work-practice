import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API = "http://localhost:5000/api/products";

function App() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // GET products
  const getProducts = async () => {
    try {
      const res = await axios.get(API);
      setProducts(res.data.data);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // ADD product
  const addProduct = async () => {
    if (!name || !price) return alert("Fill all fields");

    try {
      await axios.post(API, {
        name,
        price: Number(price),
      });

      setName("");
      setPrice("");
      getProducts();
    } catch (error) {
      console.log("Error adding product:", error);
    }
  };

  // DELETE product
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${API}/${id}`);
      getProducts();
    } catch (error) {
      console.log("Error deleting product:", error);
    }
  };

  return (
    <div className="container">
      <h1>🛒 My Store App</h1>

      {/* FORM */}
      <div className="form">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button onClick={addProduct}>Add Product</button>
      </div>

      {/* PRODUCTS */}
      <div className="grid">
        {products.map((p) => (
          <div className="card" key={p.id}>
            <h3>{p.name}</h3>
            <p> {p.price}</p>
            <button onClick={() => deleteProduct(p.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
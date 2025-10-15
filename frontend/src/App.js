import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4 text-primary fw-bold">🛍️ Product Gallery</h1>

      {products.length === 0 ? (
        <div className="text-center text-muted">No products found.</div>
      ) : (
        <div className="row">
          {products.map((p) => (
            <div key={p._id} className="col-md-4 col-sm-6 mb-4">
              <div className="card shadow-sm h-100">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.name}
                    className="card-img-top"
                    style={{
                      height: "250px",
                      objectFit: "cover",
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                    }}
                  />
                ) : (
                  <div
                    className="d-flex align-items-center justify-content-center bg-light"
                    style={{ height: "250px", color: "#aaa" }}
                  >
                    No Image
                  </div>
                )}

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{p.name}</h5>
                  <p className="text-muted flex-grow-1">{p.description}</p>
                  <p className="fw-semibold text-success mb-1">
                    💵 {p.price.toLocaleString()} VND
                  </p>
                  <p className="text-secondary mb-2">
                    Stock: {p.stock > 0 ? p.stock : "Out of stock"}
                  </p>
                  <button className="btn btn-outline-primary w-100 mt-auto">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function AboutPage() {
  return (
    <div className="container mt-4">
      <h2>About Us</h2>
      <p>This is a simple MERN app using React, Node.js, and MongoDB Atlas.</p>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="container mt-4">
      <h2>Contact</h2>
      <p>Contact us at <a href="mailto:basicmern@example.com">basicmern@example.com</a></p>
    </div>
  );
}

function CartPage() {
  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      <p>No items yet...</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default App;

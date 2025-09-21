import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductsView from "./components/ProductsView";
import ProductDetailsView from "./components/ProductDetailsView";
import CartView from "./components/CartView";
import "./App.css"; 

const App: React.FC = () => {
  return (
    <Router>
      {/* Top Navigation Bar */}
      <nav className="navbar">
        <Link to="/" className="nav-link">
          Products
        </Link>
        <Link to="/cart" className="nav-link">
          Cart
        </Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<ProductsView />} />
        <Route path="/products/:id" element={<ProductDetailsView />} />
        <Route path="/cart" element={<CartView />} />
      </Routes>
    </Router>
  );
};

export default App;

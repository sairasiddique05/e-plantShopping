// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa"; // optional cart icon

const Navbar = () => {
  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items || []);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#2E8B57",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    marginLeft: "1.5rem",
    fontWeight: "bold",
    fontSize: "1.1rem",
  };

  const logoStyle = {
    display: "flex",
    alignItems: "center",
    gap: "0.8rem",
  };

  const cartBadgeStyle = {
    position: "absolute",
    top: "-8px",
    right: "-8px",
    background: "red",
    color: "white",
    borderRadius: "50%",
    padding: "0.2rem 0.5rem",
    fontSize: "0.8rem",
  };

  return (
    <nav style={navbarStyle}>
      {/* Logo / Company */}
      <div style={logoStyle}>
        <img
          src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
          alt="Logo"
          style={{ width: "50px", height: "50px" }}
        />
        <div>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            <h3>Paradise Nursery</h3>
            <i style={{ fontSize: "0.9rem" }}>Where Green Meets Serenity</i>
          </Link>
        </div>
      </div>

      {/* Links */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Link to="/products" style={linkStyle}>
          Plants
        </Link>
        <Link to="/cart" style={{ position: "relative" }}>
          <FaShoppingCart size={28} />
          {totalQuantity > 0 && (
            <span style={cartBadgeStyle}>{totalQuantity}</span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

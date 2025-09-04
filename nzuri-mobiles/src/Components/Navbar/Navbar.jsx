import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Nzuri Mobiles</div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className="navbar-cart">🛒</div>
    </nav>
  );
};

export default Navbar;

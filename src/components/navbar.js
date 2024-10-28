import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">MB</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/consulting">Consulting</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

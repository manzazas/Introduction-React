import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/zach">Zach</Link>
      <Link to="/saj">Saj</Link>
    <Link to="/ye">Ye</Link>
    </nav>
  );
};

export default Nav;

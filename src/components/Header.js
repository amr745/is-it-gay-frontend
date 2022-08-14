import React from 'react';
import { Link } from "react-router-dom";

function Header(props) {
  //inline style for the nav tag
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    border: "3px solid black",
    padding: "8px",
    width: "90%",
    margin: "auto",
  };

  return (
    <header>
      <nav style={navStyle}>
        <Link to="/">INDEX</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/create">ADD CONTENT</Link>
      </nav>
      <h1>Is It Gay?</h1>
    </header>
  );
}

export default Header;
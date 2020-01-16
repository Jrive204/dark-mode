import React from "react";
import { useDarkMode } from "./hooks/useDarkMode";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [darkMode, toggleMode] = useDarkMode("dark", false);

  return (
    <nav className='navbar'>
      <Link to='/' style={{ textDecoration: "none" }}>
        <h1>Crypto Tracker</h1>
      </Link>
      <Link style={{ fontSize: "2.5rem", paddingRight: "7%" }} to='/exchanges'>
        Exchanges
      </Link>
      <div className='dark-mode__toggle'>
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;

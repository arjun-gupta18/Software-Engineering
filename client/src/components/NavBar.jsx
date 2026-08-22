import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">STHIRA</div>

      <div className="nav-right">
        <span>Welcome!</span>
        <button>Logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
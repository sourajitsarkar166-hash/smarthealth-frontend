import React from "react";
import { FaHeartbeat } from "react-icons/fa";
import "./layout.css";

function Layout({ children }) {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <FaHeartbeat />
          <span>Smart Health</span>
        </div>
      </nav>

      <div className="container">{children}</div>
    </div>
  );
}

export default Layout;
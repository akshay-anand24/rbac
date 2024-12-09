import React from "react";
import "./Sidebar.css";

function Sidebar({ setActiveSection }) {
  return (
    <div className="sidebar">
      <ul>
        <li onClick={() => setActiveSection("userManagement")}>User Management</li>
        <li onClick={() => setActiveSection("roleManagement")}>Role Management</li>
      </ul>
    </div>
  );
}

export default Sidebar;

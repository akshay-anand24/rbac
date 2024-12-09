import React, { useState } from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import UserManagement from "./components/UserManagement/UserManagement";
import RoleManagement from "./components/RoleManagement/RoleManagement";
import { RBACProvider } from "./context/RBACContext";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("userManagement");

  return (
    <RBACProvider>
      <div className="app">
        <Header />
        <div className="main-content">
          <Sidebar setActiveSection={setActiveSection} />
          <div className="content">
            {activeSection === "userManagement" && <UserManagement />}
            {activeSection === "roleManagement" && <RoleManagement />}
          </div>
        </div>
      </div>
    </RBACProvider>
  );
}

export default App;

import React, { createContext, useContext, useState } from "react";

const RBACContext = createContext();

export const RBACProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  ]);

  // Add a new user
  const addUser = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  // Edit an existing user
  const editUser = (id, updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === id ? { ...user, ...updatedUser } : user))
    );
  };

  // Delete a user
  const deleteUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  // Add a new role
  const addRole = (role) => {
    setRoles((prevRoles) => [...prevRoles, role]);
  };

  // Edit an existing role
  const editRole = (id, updatedRole) => {
    setRoles((prevRoles) =>
      prevRoles.map((role) => (role.id === id ? { ...role, ...updatedRole } : role))
    );
  };

  // Delete a role
  const deleteRole = (id) => {
    setRoles((prevRoles) => prevRoles.filter((role) => role.id !== id));
  };

  return (
    <RBACContext.Provider
      value={{
        users,
        roles,
        addUser,
        editUser,
        deleteUser,
        addRole,
        editRole,
        deleteRole,
      }}
    >
      {children}
    </RBACContext.Provider>
  );
};

// Custom hook to use RBAC context
export const useRBAC = () => {
  return useContext(RBACContext);
};

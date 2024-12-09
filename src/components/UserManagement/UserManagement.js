import React, { useState } from "react";
import { useRBAC } from "../../context/RBACContext";
import "./UserManagement.css";

function UserManagement() {
  const { users, roles, addUser, editUser, deleteUser } = useRBAC();
  const [currentUser, setCurrentUser] = useState(null); // Tracks user being edited
  const [formValues, setFormValues] = useState({ name: "", role: "", status: "Active" });

  const handleAddUser = () => {
    if (formValues.name && formValues.role) {
      addUser({ id: Date.now(), ...formValues });
      setFormValues({ name: "", role: "", status: "Active" });
    }
  };

  const handleEditUser = () => {
    if (formValues.name && formValues.role) {
      editUser(currentUser.id, formValues);
      setFormValues({ name: "", role: "", status: "Active" });
      setCurrentUser(null);
    }
  };

  const startEditUser = (user) => {
    setCurrentUser(user);
    setFormValues({ name: user.name, role: user.role, status: user.status });
  };

  const handleDeleteUser = (id) => {
    deleteUser(id);
  };

  return (
    <div className="user-management">
      <h2>User Management</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <div className="user-info">
              {user.name} - {user.role} - {user.status}
            </div>
            <div className="actions">
              <button className="edit-btn" onClick={() => startEditUser(user)}>
                Edit
              </button>
              <button className="delete-btn" onClick={() => handleDeleteUser(user.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="form">
        <input
          type="text"
          placeholder="Name"
          value={formValues.name}
          onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
        />
        <select
          value={formValues.role}
          onChange={(e) => setFormValues({ ...formValues, role: e.target.value })}
        >
          <option value="" disabled>
            Select Role
          </option>
          {roles.map((role) => (
            <option key={role.id} value={role.name}>
              {role.name}
            </option>
          ))}
        </select>
        <select
          value={formValues.status}
          onChange={(e) => setFormValues({ ...formValues, status: e.target.value })}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        {currentUser ? (
          <button onClick={handleEditUser}>Update User</button>
        ) : (
          <button onClick={handleAddUser}>Add User</button>
        )}
      </div>
    </div>
  );
}

export default UserManagement;

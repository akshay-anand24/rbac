import React, { useState } from "react";
import { useRBAC } from "../../context/RBACContext";
import "./RoleManagement.css";

function RoleManagement() {
  const { roles, addRole, editRole, deleteRole } = useRBAC();
  const [currentRole, setCurrentRole] = useState(null); // Tracks role being edited
  const [formValues, setFormValues] = useState({ name: "", permissions: [] });

  const handleAddRole = () => {
    if (formValues.name && formValues.permissions.length > 0) {
      if (currentRole) {
        // Edit existing role
        editRole(currentRole.id, formValues);
        setCurrentRole(null);
      } else {
        // Add new role
        addRole({ id: Date.now(), ...formValues });
      }
      resetForm();
    }
  };

  const resetForm = () => {
    setFormValues({ name: "", permissions: [] });
    setCurrentRole(null);
  };

  const handleEditClick = (role) => {
    setCurrentRole(role);
    setFormValues({ name: role.name, permissions: role.permissions });
  };

  const handlePermissionsChange = (e) => {
    const permissions = e.target.value
      .split(",")
      .map((permission) => permission.trim())
      .filter((permission) => permission); // Remove empty or invalid permissions
    setFormValues({ ...formValues, permissions });
  };

  return (
    <div className="role-management">
      <h2>Role Management</h2>

      <ul>
        {roles.map((role) => (
          <li key={role.id} className="role-item">
            <div className="role-info">
              <span>{role.name} </span>
              <span>Permissions: {role.permissions.join(", ")}</span>
            </div>
            <div className="role-actions">
              <button
                className="edit-btn"
                onClick={() => handleEditClick(role)}
              >
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => deleteRole(role.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="form">
        <h4>{currentRole ? "Edit Role" : "Add Role"}</h4>
        <br />
        <input
          type="text"
          placeholder="Role Name"
          value={formValues.name}
          onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
        />

        <div className="permissions">
          <input
            type="text"
            value={formValues.permissions.join(", ")}
            onChange={handlePermissionsChange}
            placeholder="Enter Permissions (comma separated) e.g. Read, Write, Delete"
          />
        </div>

        <button onClick={handleAddRole}>
          {currentRole ? "Save Changes" : "Add Role"}
        </button>
        {currentRole && <button onClick={resetForm}>Cancel</button>}
      </div>
    </div>
  );
}

export default RoleManagement;

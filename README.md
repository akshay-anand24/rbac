
# Role and User Management System

This project implements a simple **Role-Based Access Control (RBAC)** system, allowing users to manage roles, permissions, and users efficiently. It features components for user management and role management with dynamic permission handling, edit/delete functionalities, and a responsive UI.

---

## Features

### Role Management
- Add new roles with a name and a comma-separated list of permissions (e.g., "Read, Write, Delete").
- Edit existing roles to update their name or permissions dynamically.
- Delete roles from the system.
- Displays roles with their respective permissions in a user-friendly list format.

### User Management
- Add new users with a name, role (selected from existing roles), and status (e.g., Active/Inactive).
- Edit user details such as name, role, and status dynamically.
- Delete users from the system.
- Displays users with their assigned roles and statuses.

### Context API Usage
- Implements a shared state for roles and users using React Context API, ensuring centralized data handling and easier updates.

### Responsive UI
- Fully responsive design to work seamlessly on devices of all screen sizes.
- Separate, consistent styling for each component using modular CSS.

---

## Project Structure

```
src/
|-- components/
|   |-- Header/
|   |   |-- Header.js
|   |   |-- Header.css
|   |-- Sidebar/
|   |   |-- Sidebar.js
|   |   |-- Sidebar.css
|   |-- UserManagement/
|   |   |-- UserManagement.js
|   |   |-- UserManagement.css
|   |-- RoleManagement/
|   |   |-- RoleManagement.js
|   |   |-- RoleManagement.css
|-- context/
|   |-- RBACContext.js
|-- App.js
|-- App.css
|-- index.js
```

---

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/akshay-anand24/rbac.git
   cd rbac
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

---

## Usage

1. **Role Management**:
   - Navigate to the "Role Management" section via the sidebar.
   - Add roles using the "Role Entry" form.
   - Edit or delete roles directly from the list.

2. **User Management**:
   - Navigate to the "User Management" section via the sidebar.
   - Add users by providing their name, selecting a role, and setting their status.
   - Edit or delete users directly from the list.

---

## Future Enhancements
- Persistent storage integration (e.g., local storage or backend API).
- Search and filter functionalities for roles and users.
- Advanced permission management (e.g., hierarchies, role inheritance).

---

## License

This project is open-source and available under the MIT License.

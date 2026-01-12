// src/App.js
import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="container">
      <h2>User List</h2>

      {/* API Information */}
      <div className="api-info">
        <h3>📊 API Information</h3>
        <p><strong>API URL:</strong> {apiUrl}</p>
        <p><strong>Fetch Method:</strong> GET</p>
      </div>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

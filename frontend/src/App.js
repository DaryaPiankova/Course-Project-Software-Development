import React, { useState } from 'react';
import axios from 'axios';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {
  const [role, setRole] = useState(null);

  const handleLogin = (username, password) => {
    axios.post(`${process.env.REACT_APP_API_URL}/api/login`, { username, password })
      .then(response => {
        setRole(response.data.role);
      })
      .catch(error => {
        console.error('Login error', error);
      });
  };

  return (
    <div>
      {!role ? <Login onLogin={handleLogin} /> : <Dashboard role={role} />}
    </div>
  );
}

export default App;

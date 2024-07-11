import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleKickout = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/admin/kickout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username }),
    });
    const data = await response.json();
    if (response.ok) {
      setMessage(data.message);
      setError('');
      localStorage.removeItem('token')
      navigate('/login');
    } else {
      setError(data.error);
      setMessage('');
    }
  };

  return (
    <div>
      <h2>Admin</h2>
      <h3>Username: test@example.com</h3>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleKickout}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <button type="submit">Kick Out User</button>
      </form>
    </div>
  );
}

export default Admin;

import React, { useState, useEffect } from 'react';
import Admin from './Admin';

function Home() {
  const [time, setTime] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTime = async () => {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/auth/get-time', {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      if (response.ok) {
        setTime(data.time);
      } else {
        setError(data.error);
      }
    };

    fetchTime();
  }, []);

  return (
    <div>
      <h2>Home</h2>
      {error ? <p style={{ color: 'red' }}>{error}</p> : <p>Server Time: {time}</p>}

      <Admin />
    </div>
  );
}

export default Home;

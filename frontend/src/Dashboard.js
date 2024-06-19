import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard({ role }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/data?role=${role}`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Data fetch error', error);
      });
  }, [role]);

  return (
    <div>
      <h1>Dashboard</h1>
      {data && (
        <div>
          {role === 'Jack' && <p>Profit: {data.profit}</p>}
          {role === 'Queen' && <p>Volume: {data.volume}</p>}
          {role === 'King' && <p>Revenue: {data.revenue}</p>}
        </div>
      )}
    </div>
  );
}

export default Dashboard;

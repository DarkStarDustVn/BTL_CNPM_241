import React, { useState } from 'react';

import './App.css';

const AdminDashBoard = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
};

export default AdminDashBoard;
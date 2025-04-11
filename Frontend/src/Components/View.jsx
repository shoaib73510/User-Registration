import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './View.css';

function View() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8086/api')
      .then(response => setUser(response.data))
      .catch(err => console.log(err));
  }, []);

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8086/api/${id}`);
    setUser(user.filter(item => item._id !== id));
  };

  return (
    <div className="responsive-container">
      <h1 className="title">User List</h1>
      <div className="row">
        {user.map((data) => (
          <div key={data._id} className="card">
            <div className="card-body">
              <h6 className="text">{data.name}</h6>
              <h6 className="text">{data.email}</h6>
              <button 
                className="btn btn-danger"
                onClick={() => deleteUser(data._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default View;

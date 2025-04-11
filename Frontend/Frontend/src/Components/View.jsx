import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './View.css'
function View() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8086/api')
      .then(response => {
        setUser(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8086/api/${id}`);
    setUser(user.filter(item => item._id !== id));
  };

  return (
    <div className="container  responsive-container">
      <div className="row g-4">
        {user.map(data => (
          <div key={data._id} className="col-12 col-md-6 col-lg-4">
            <div className="card d-flex align-items-center">
              <div className="card-body">
                <h6>{data.name}</h6>
                <h6>{data.email}</h6>
                <button 
                  className="btn btn-danger btn-delete" 
                  onClick={() => deleteUser(data._id)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default View;

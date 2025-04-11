import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

function Home() {
  const [user, setUser] = useState([]);
  const [newUser, setNewUser] = useState({ name: '', email: '' });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8086/api/");
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addUser = async (e) => {
    e.preventDefault();
    if (!newUser.name || !newUser.email) return;

    try {
      const res = await axios.post('http://localhost:8086/api/', newUser);
      setUser([...user, res.data]);
      setNewUser({ name: '', email: '' });
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  return (
    <div className="container bg-primary">
      <h1 className="main text-center">User Registration App</h1>
      <form onSubmit={addUser} className="form">
        <div className="form-group">
          <label htmlFor="exampleInputUsername">User name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputUsername"
            name="name"
            value={newUser.name}
            onChange={handleChange}
            placeholder="Enter user name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            value={newUser.email}
            onChange={handleChange}
            placeholder="Enter email address"
          />
        </div>
        <button type="submit" className="btn btn-light btn-submit">Submit</button>
      </form>
    </div>
  );
}

export default Home;

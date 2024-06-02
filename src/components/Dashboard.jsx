import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserList from './UserList';
import { Button } from 'react-bootstrap';
import './Dashboard.css';
import authService from '../Service/authService';
import axios from 'axios';


const Dashboard = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const goto = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const user = authService.getCurrentUser();
      if (user && user.token) {
        try {
          const response = await axios.get("http://localhost:5000/api/users", {
            headers: { Authorization: `Bearer ${user.token}` },
          });
          setData(response.data);
        } catch (err) {
          setError("Failed to fetch data");
        }
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container mt-5">
       <button
          onClick={() => {
            authService.logout();
            goto("/login");
          }}
        >
          Logout
        </button>
      <div className="d-flex justify-content-between mb-3">
        <h1>Users List</h1>
        <Link to="/admin/add-user">
          <Button variant="primary">Add User</Button>
        </Link>
      </div>
      
        <UserList users={data} setData={setData}/>
     
     
    </div>
  );
};

export default Dashboard;

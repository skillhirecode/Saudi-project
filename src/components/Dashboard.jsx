import React from 'react';
import { Link } from 'react-router-dom';
import UserList from './UserList';
import { Button } from 'react-bootstrap';
import './Dashboard.css';


const Dashboard = () => {
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between mb-3">
        <h1>Users List</h1>
        <Link to="/add-user">
          <Button variant="primary">Add User</Button>
        </Link>
      </div>
      <UserList />
    </div>
  );
};

export default Dashboard;

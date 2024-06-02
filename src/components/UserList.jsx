import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';

const UserList = ({users,setData}) => {
  

  const handleDelete = (id) => {
    setData(users.filter(user => user.id !== id));
  };

  const handleEdit = (id) => {
    // Edit user logic here
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Mark</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.mark}</td>
            <td>{user.profilePic && (
        <img src={`data:image/jpeg;base64,${user.profilePic}`} alt="Profile" height={100} width={100}/>
      )}</td>
            <td>
              <Button variant="warning" onClick={() => handleEdit(user.id)}>Edit</Button>
              {' '}
              <Button variant="danger" onClick={() => handleDelete(user.id)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserList;

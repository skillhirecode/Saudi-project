import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';

const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', title: 'Developer', description: 'Software Developer' },
    { id: 2, name: 'Jane Smith', title: 'Designer', description: 'Graphic Designer' },
  ]);

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleEdit = (id) => {
    // Edit user logic here
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Title</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.title}</td>
            <td>{user.description}</td>
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

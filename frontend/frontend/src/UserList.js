import React, { useEffect, useState } from 'react';
import { api } from '../api';
import UserForm from './UserForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);

    // Fetch users from backend
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await api.get('/');
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    // Delete a user
    const deleteUser = async (id) => {
        try {
            await api.delete(`/${id}`);
            setUsers(users.filter(user => user._id !== id));
            toast.success('User deleted successfully');
        } catch (error) {
            console.error('Error deleting user:', error);
            toast.error('Failed to delete user');
        }
    };

    return (
        <div>
            <h2>User List</h2>
            <UserForm fetchUsers={fetchUsers} editingUser={editingUser} setEditingUser={setEditingUser} />
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        {user.name} - {user.email} - Age: {user.age}
                        <button onClick={() => setEditingUser(user)}>Edit</button>
                        <button onClick={() => deleteUser(user._id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <ToastContainer />
        </div>
    );
};

export default UserList;

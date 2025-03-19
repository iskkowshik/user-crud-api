import React, { useState, useEffect } from 'react';
import { api } from '../api';
import { toast } from 'react-toastify';

const UserForm = ({ fetchUsers, editingUser, setEditingUser }) => {
    const [formData, setFormData] = useState({ name: '', email: '', age: '' });

    useEffect(() => {
        if (editingUser) {
            setFormData(editingUser);
        } else {
            setFormData({ name: '', email: '', age: '' });
        }
    }, [editingUser]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingUser) {
                await api.put(`/${editingUser._id}`, formData);
                toast.success('User updated successfully');
            } else {
                await api.post('/', formData);
                toast.success('User added successfully');
            }
            fetchUsers();
            setEditingUser(null);
            setFormData({ name: '', email: '', age: '' });
        } catch (error) {
            console.error('Error saving user:', error);
            toast.error('Failed to save user');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <input type="number" name="age" value={formData.age} onChange={handleChange} placeholder="Age" required />
            <button type="submit">{editingUser ? 'Update User' : 'Add User'}</button>
            {editingUser && <button onClick={() => setEditingUser(null)}>Cancel</button>}
        </form>
    );
};

export default UserForm;

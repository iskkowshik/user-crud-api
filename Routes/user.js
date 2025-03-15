const express = require('express');
const User = require('../DbSchema/UserSchema');
const router = express.Router();


// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});


// Create a user

router.post('/', async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const user = await User.create({name, email, age});
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// Get an user by ID
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({message: 'User is not found'});
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});



// Update an user
router.put('/:id', async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!updatedUser) return res.status(404).json({message: 'User is not found'});
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

// Delete a user
router.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ message: 'User is not found' });
        res.status(200).json({message: 'User deleted successfully'});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
});

module.exports = router;

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticateToken = require('../middleware/authenticateToken');

const router = express.Router();

const users = {};
const SECRET_KEY = 'akshay_2004';

router.post('/signup', async (req, res) => {
    console.log('Signup request received:', req.body);
    const { name, email, phone, password } = req.body;
    if (!name || !email || !phone || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    if (users[email]) {
        return res.status(400).json({ message: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    users[email] = { name, email, phone, password: hashedPassword };
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log('Login request received:', { email, password });
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    const user = users[email];
    if (!user) {
        return res.status(400).json({ message: 'User not found' });
    }
    console.log('User found:', user);

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
        return res.status(400).json({ message: 'Invalid password' });
    }
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
});

router.get('/home', authenticateToken, (req, res) => {
    res.send(`Welcome ${req.user.email}`);
});

module.exports = router;

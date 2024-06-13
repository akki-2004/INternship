const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
const users = {}; 
const SECRET_KEY = 'akshay_2004';
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (token == null) return res.sendStatus(401);
    
    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};
app.post('/signup', async (req, res) => {
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

app.post('/login', async (req, res) => {
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
app.get('/home', authenticateToken, (req, res) => {
    res.send(`Welcome ${req.user.email}`);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

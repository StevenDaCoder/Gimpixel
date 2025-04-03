const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
const port = 3000;

app.use(express.json());

const storedHashedPassword = '$2b$10$...'; // Replace with your stored hashed password

app.post('/verify-password', (req, res) => {
    const { password } = req.body;

    bcrypt.compare(password, storedHashedPassword, (err, result) => {
        if (result) {
            res.json({ success: true });
        } else {
            res.json({ success: false });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
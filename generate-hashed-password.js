// Generate a hashed password (run this separately during setup)
const bcrypt = require('bcrypt');
const plainTextPassword = 'your-secure-password';

bcrypt.hash(plainTextPassword, 10, (err, hash) => {
    if (err) throw err;
    console.log('Hashed password:', hash);
    // Store the hash in your database or environment
});
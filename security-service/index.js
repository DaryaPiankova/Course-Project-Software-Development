const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const app = express();
app.use(express.json());

mongoose.connect('mongodb://security-database:27017/security', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String
});

const User = mongoose.model('User', userSchema);

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username })
    .then(user => {
      if (!user) return res.status(404).json({ error: 'User not found' });
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!result) return res.status(401).json({ error: 'Incorrect password' });
        res.json({ role: user.role });
      });
    })
    .catch(error => res.status(500).json({ error: error.message }));
});

app.listen(3000, () => {
  console.log('Security Service running on port 3000');
});

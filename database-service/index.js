const express = require('express');
const pgp = require('pg-promise')();
const app = express();
app.use(express.json());

const db = pgp({
  host: 'postgres',
  port: 5432,
  database: 'mydb',
  user: 'user',
  password: 'password'
});

app.get('/data', (req, res) => {
  const { role } = req.query;
  db.any('SELECT * FROM sales_data WHERE role = $1', [role])
    .then(data => res.json(data))
    .catch(error => res.status(500).json({ error: error.message }));
});

app.listen(3002, () => {
  console.log('Database Service running on port 3002');
});

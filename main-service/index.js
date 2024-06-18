const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.get('/api/data', (req, res) => {
  const { role } = req.query;
  // Запрос данных из Database Service
  axios.get(`http://database-service:3002/data?role=${role}`)
    .then(response => res.json(response.data))
    .catch(error => res.status(500).json({ error: error.message }));
});

app.listen(3001, () => {
  console.log('Main Service running on port 3001');
});

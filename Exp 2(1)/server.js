const express = require('express');
const db = require('./config/db');
const path = require('path');
const app = express();
const PORT = 3000;

// serve static HTML file
app.use(express.static(path.join(__dirname, 'public')));

// API route to fetch all users
app.get('/api/users', (req, res) => {
  db.all('SELECT * FROM users', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Database fetch error' });
    }
    res.json(rows);
  });
});

// start server
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));

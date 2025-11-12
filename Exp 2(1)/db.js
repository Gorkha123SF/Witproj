const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// create or open database file
const dbPath = path.resolve(__dirname, '../userdb.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('❌ Database connection failed:', err.message);
  } else {
    console.log('✅ Connected to SQLite database');
  }
});

// create users table if not exists and insert sample data
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL
  )`);

  // insert sample data only if table is empty
  db.all(`SELECT COUNT(*) as count FROM users`, (err, rows) => {
    if (rows[0].count === 0) {
      const stmt = db.prepare(`INSERT INTO users (name, email) VALUES (?, ?)`);
      stmt.run('Alice', 'alice@example.com');
      stmt.run('Bob', 'bob@example.com');
      stmt.run('Charlie', 'charlie@example.com');
      stmt.finalize();
      console.log('🌱 Sample data inserted');
    }
  });
});

module.exports = db;

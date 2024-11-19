// db.js
const sqlite3 = require("sqlite3").verbose();

// Connect to SQLite Database
const db = new sqlite3.Database(":memory:", (err) => {
  if (err) {
    console.error("Error opening database:", err.message);
  } else {
    db.run(
      `CREATE TABLE IF NOT EXISTS reactions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            reactionTime REAL,
            date TEXT
        )`,
      (err) => {
        if (err) {
          console.error("Error creating table:", err.message);
        }
      }
    );
  }
});

module.exports = db;

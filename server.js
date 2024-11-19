// server.js
const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint to save reaction time
app.post("/api/reaction-time", (req, res) => {
  const { name, reactionTime, date } = req.body;
  db.run(
    `INSERT INTO reactions (name, reactionTime, date) VALUES (?, ?, ?)`,
    [name, reactionTime, date],
    function (err) {
      if (err) {
        res
          .status(500)
          .json({ message: "Error saving reaction time", error: err.message });
      } else {
        res.status(201).json({ message: "Reaction time saved successfully" });
      }
    }
  );
});

// Endpoint to get leaderboard (top 3 reaction times)
app.get("/api/leaderboard", (req, res) => {
  db.all(
    `SELECT name, reactionTime, date FROM reactions ORDER BY reactionTime ASC LIMIT 3`,
    [],
    (err, rows) => {
      if (err) {
        res
          .status(500)
          .json({ message: "Error fetching leaderboard", error: err.message });
      } else {
        res.status(200).json(rows);
      }
    }
  );
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

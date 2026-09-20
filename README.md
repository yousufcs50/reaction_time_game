# Reaction Time Tester

A browser game that measures how fast you react to a visual signal, modelled on Formula 1 starting lights. Five red lights come on one at a time, then all go out after a randomised delay. The moment they do, you click.

Reaction times are persisted server-side and ranked on a leaderboard.

## Run it

```bash
npm install
npm start
```

The server listens on `http://localhost:3000`. Open `reaction_time.html` in a browser to play.

## How it works

The front end is plain HTML, CSS and JavaScript, with no framework. The light sequence is driven by timers and the release delay is randomised on every round, so the start cannot be anticipated or learned.

The back end is Express over SQLite:

| Route | Method | Purpose |
| :--- | :--- | :--- |
| `/api/reaction-time` | `POST` | Record a player's time |
| `/api/leaderboard` | `GET` | Return the ranked times |

`db.js` owns the SQLite connection and schema. Scores survive restarts.

## Stack

JavaScript · Node.js · Express · SQLite

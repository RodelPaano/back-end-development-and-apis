const express = require("express");
const app = express();

// Port 3000 as required
const PORT = 3000;

// GET route for root path /
app.get("/", (req, res) => {
  res.send("Welcome to Camper Bot's homepage!");
});

// GET route for /hobbies path
app.get("/hobbies", (req, res) => {
  res.send("I cycle, go boating, and play guitar.");
});

// GET route for /skills path
app.get("/skills", (req, res) => {
  res.send("JavaScript, Node.js, and Express.js!");
});

// GET route for /api/profile path
app.get("/api/profile", (req, res) => {
  res.json({
    name: "Camper Bot",
    hobbies: ["cycling", "boating", "guitar"],
    skills: ["JavaScript", "Node.js", "Express.js"]
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

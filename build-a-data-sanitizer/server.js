const express = require("express");
const path = require("path");
const { inputCleaner, inputValidator } = require("./middleware");

const app = express();
const PORT = 3000;

// Middleware to parse JSON body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public directory
app.use(express.static(path.join(__dirname, "public"), { index: false }));

// GET / - redirect to /form
app.get("/", (req, res) => {
  res.redirect("/form");
});

// GET /form - serve the HTML form
app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// POST /submit - apply middleware and handler
app.post("/submit", inputCleaner, inputValidator, (req, res) => {
  res.json({
    username: req.body.username,
    comment: req.body.comment,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

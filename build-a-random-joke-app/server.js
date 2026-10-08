const express = require("express");
const app = express();
const port = 3000;

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Welcome to the Random Joke Server! Visit /joke to get a random joke.");
});


/**
 * Create a Globel Variable
 * Jokes with the Following
 * Value
 */

const jokes = [
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "There are only 10 kinds of people in the world: those who understand binary and those who don't.",
    "I told my computer I needed a break, and it said \"No problem, I'll go to sleep.",
    "Why do Java developers wear glasses? Because they don't see sharp.",
]


/**
 * Create a /joke GET Route. Inside the route handler,
 * pick a random joke from the jokees array, and save it in a randomJoke Variable,
 * then send it back to the client using res.send
 */

app.get("/joke", (req, res) => {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
    res.send(randomJoke);
});

/**
 * Create a /about GET route, Inside the route handler,
 * use res.send to send the messages
 * "This Random Joke Server was built with Express.js"
 */

app.get("/about", (req, res) => {
    res.send("This Random Joke Server was built with Express.js");
});
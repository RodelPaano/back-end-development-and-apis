import cors from "cors";
import express from "express";

const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static("public"));

app.get("/", (_req, res) => {
  res.sendFile(import.meta.dirname + "/views/index.html");
});

// Do not change code above this line

// Timestamp API endpoint - with date parameter
app.get("/api/:date", (req, res) => {
  const { date } = req.params;
  const parsedDate = /^\d+$/.test(date)
    ? new Date(Number(date))
    : new Date(date);

  // Check if date is valid
  if (isNaN(parsedDate.getTime())) {
    return res.json({ error: "Invalid Date" });
  }

  // Return unix timestamp and UTC string
  res.json({
    unix: parsedDate.getTime(),
    utc: parsedDate.toUTCString(),
  });
});

// Timestamp API endpoint - without date parameter (current time)
app.get("/api/", (req, res) => {
  const now = new Date();
  res.json({
    unix: now.getTime(),
    utc: now.toUTCString(),
  });
});

// Do not change code below this line

const PORT = 8000;
const listener = app.listen(PORT, function () {
  console.log("Your app is listening on port " + listener.address().port);
});

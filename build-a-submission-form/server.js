import express from "express";
import {
  finalErrorHandler,
  notFoundHandler,
} from "./middleware/error.middleware.js";
import apiRouter from "./routes/api.routes.js";

const app = express();

// Logger middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// JSON middleware
app.use(express.json());

// URL-encoded middleware
app.use(express.urlencoded({ extended: true }));

// Mount apiRouter at /api path
app.use("/api", apiRouter);

// 404 notFoundHandler
app.use(notFoundHandler);

// Error finalErrorHandler
app.use(finalErrorHandler);

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});

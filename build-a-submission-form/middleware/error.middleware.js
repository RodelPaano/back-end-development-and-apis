const notFoundHandler = (req, res, next) => {
  const err = new Error(`Path not found: ${req.originalUrl}`);
  err.status = 404;
  next(err);
};

const finalErrorHandler = (err, req, res, next) => {
  const status = err.status || 500;

  // Log the error
  console.error(`[${new Date().toISOString()}] ${status} ${err.message}`);

  // Hide internal details on 500 errors
  const message =
    status === 500 ? "Internal Server Error (Check Server Logs)" : err.message;

  // Respond with JSON
  res.status(status).json({ error: true, status, message });
};

export { finalErrorHandler, notFoundHandler };
export default finalErrorHandler;

const inputCleaner = (req, res, next) => {
  // Convert username to lowercase if it exists
  if (req.body.username) {
    req.body.username = req.body.username.toLowerCase();
  }

  // Strip HTML tags from comment if it exists
  if (req.body.comment) {
    req.body.comment = req.body.comment.replace(/<[^>]*>/g, "");
  }

  next();
};

// inputValidator middleware
// Checks if username is at least 3 characters long
const inputValidator = (req, res, next) => {
  if (req.body.username && req.body.username.length >= 3) {
    return next();
  }

  // Redirect to /form with error message
  res.redirect(
    "/form?error=Username%20must%20be%20at%20least%203%20characters.",
  );
};

module.exports = { inputCleaner, inputValidator };

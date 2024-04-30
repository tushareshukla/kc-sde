// utils/errorHandler.js

// Custom error handling middleware

// Error handler middleware
const errorHandler = (err, req, res, next) => {
    // Log the error for debugging (optional)
    console.error(err);
  
    // Set default status code and error message
    let statusCode = 500;
    let errorMessage = 'Internal Server Error';
  
    // Customize error response based on error type
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
      // Handle JSON parsing error
      statusCode = 400;
      errorMessage = 'Invalid JSON payload';
    } else if (err.name === 'ValidationError') {
      // Handle Mongoose validation error
      statusCode = 400;
      errorMessage = err.message;
    }
  
    // Send error response
    res.status(statusCode).json({
      status: 'error',
      message: errorMessage,
    });
  };
  
  module.exports = errorHandler;
  
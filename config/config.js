// config/config.js

require('dotenv').config(); // Load environment variables from .env file

module.exports = {
  // Define configuration variables
  port: process.env.PORT || 3000, // Port for the server to listen on
  db: {
    // Database configuration
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 27017,
    name: process.env.DB_NAME || 'student_db',
    username: process.env.DB_USERNAME || '', // Insert your database username if required
    password: process.env.DB_PASSWORD || '', // Insert your database password if required
  },
};

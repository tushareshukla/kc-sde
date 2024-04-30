// routes/studentRoutes.js

const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Define routes for student-related operations

// Route for fetching all students with pagination
router.get('/students', studentController.getAllStudents);

// Route for filtering students based on criteria
router.get('/students/filter', studentController.filterStudents);

module.exports = router;

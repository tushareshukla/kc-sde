// controllers/studentController.js

const Student = require('../models/studentModel');

// Controller functions for handling student-related requests

// Get all students with pagination
exports.getAllStudents = async (req, res, next) => {
  try {
    // Pagination parameters
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skipIndex = (page - 1) * limit;

    // Fetch students from database (example)
    const students = await Student.find()
      .skip(skipIndex)
      .limit(limit);

    // Send response
    res.status(200).json({
      status: 'success',
      data: {
        students,
      },
    });
  } catch (err) {
    // Error handling
    console.error(err);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
};

// Implement server-side filtering (example)
exports.filterStudents = async (req, res, next) => {
  try {
    // Extract filter criteria from request query params
    const { name, totalMarks } = req.query;

    // Construct filter object based on provided criteria
    const filter = {};
    if (name) filter.name = name;
    if (totalMarks) filter.totalMarks = { $gte: parseInt(totalMarks) };

    // Fetch filtered students from database (example)
    const filteredStudents = await Student.find(filter);

    // Send response
    res.status(200).json({
      status: 'success',
      data: {
        students: filteredStudents,
      },
    });
  } catch (err) {
    // Error handling
    console.error(err);
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }
};

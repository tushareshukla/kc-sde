// services/studentService.js

const Student = require('../models/studentModel');

// Service functions for interacting with student data

// Fetch all students with pagination
exports.getAllStudents = async (page, limit) => {
  try {
    const skipIndex = (page - 1) * limit;
    const students = await Student.find()
      .skip(skipIndex)
      .limit(limit);
    return students;
  } catch (error) {
    throw new Error('Failed to fetch students');
  }
};

// Filter students based on criteria
exports.filterStudents = async (filterCriteria) => {
  try {
    const students = await Student.find(filterCriteria);
    return students;
  } catch (error) {
    throw new Error('Failed to filter students');
  }
};

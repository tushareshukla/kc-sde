// models/studentModel.js

const mongoose = require('mongoose');

// Define schema for student collection
const studentSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  totalMarks: {
    type: Number,
    required: true,
  },
  // Add more fields as needed
});

// Create Student model from schema
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;

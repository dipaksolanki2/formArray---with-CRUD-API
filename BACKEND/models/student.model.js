const mongoose = require("mongoose");

// const studentSchema = new mongoose.Schema({
//     studentName: {
//         type: String,
//         required: true
//     },
//     rollNo: {
//         type: Number,
//         required: true
//     },
//     standard: {
//         type: String,
//         required: true
//     },
//     examType: {
//         type: String,
//         required: true
//     },
//     subjectName: {
//         type: String,
//         required: true
//     }

// });

const studentSchema = new mongoose.Schema({
  students: [
    {
      studentName: String,
      rollNo: String,
      Standard: String,
      exams: [
        {
          examType: String,
          subjects: [{ subjectName: String }],
        }
      ]
    }
  ]

})

const Student = mongoose.model("student", studentSchema);

module.exports = Student;

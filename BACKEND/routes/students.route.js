
const studentController = require('../controllers/students.controller');

const routes = [
  {
    method: "POST",
    path: "/students",
    handler: studentController.saveStudents,
  },
  {
    method: "GET",
    path: "/students",
    handler: studentController.getStudents,
  },
  {
    method: "DELETE",
    path: "/students/{_id}",
    handler: studentController.deleteStudent,
  },
  {
    method: "PUT",
    path: "/students/{_id}",
    handler: studentController.updateStudent,
  },
];

module.exports = routes;
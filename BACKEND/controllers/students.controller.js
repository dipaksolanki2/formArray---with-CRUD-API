const { ObjectId } = require("mongodb");
const StudentModel = require("../models/student.model");

const saveStudents = async (request, h) => {
  try {
    //   const { studentName, rollNo, standard, examType, subjectName } = request.payload;
    //   const Student = new StudentModel({ studentName, rollNo, standard, examType, subjectName });

    const Student = new StudentModel(request.payload);
    await Student.save();
    return h.response({ message: "Student added successfully" }).code(200);
  } catch (error) {
    return h.response({ error: "Internal Server Error" }).code(500);
  }
};

const getStudents = async (request, h) => {
  try {
    const Students = await StudentModel.find({});
    return h.response(Students).code(200);
  } catch (error) {
    return h.response({ error: "Internal Server Error" }).code(500);
  }
};

const deleteStudent = async (request, h) => {

  //! method 1
  // try {
  //   const { params } = request;

  //   console.log(params);

  //   await StudentModel.updateOne(
  //     { "students._id": params._id },
  //     {
  //       $pull: {
  //         students: { _id: params._id },
  //       },
  //     }
  //   );
  //   return h.response({ message: "Student deleted successfully" }).code(200);
  // } catch (error) {
  //   return h.response({ error: "Internal Server Error" }).code(500);
  // }

  //! method 2
  try {
    const { params } = request;

    console.log(params);

    await StudentModel.deleteOne({
      _id : new ObjectId(params._id),
    });

    return h.response({ message: "Student deleted successfully" }).code(200);
  } catch (error) {
    return h.response({ error: "Internal Server Error" }).code(500);
  }

  //! method 3
  // try {
  //   const { params } = request;

  //   console.log(params);

  //   await StudentModel.findOneAndDelete({
  //     _id: new ObjectId(params._id)
  //   });

  //   return h.response({ message: "Student deleted successfully" }).code(200);
  // } catch (error) {
  //   return h.response({ error: "Internal Server Error" }).code(500);
  // }
};

const updateStudent = async (request, h) => {
  try {
    const { _id } = request.params;

    //? const { studentName, rollNo, standard, examType, subjectName } = request.payload;

    console.log(_id);
    await StudentModel.findByIdAndUpdate(_id, request.payload);

    return h.response({ message: "Student updated successfully" }).code(200);

  } catch (error) {
    return h.response({ error: "Internal Server Error" }).code(500);
  }
};

module.exports = {
  saveStudents,
  getStudents,
  deleteStudent,
  updateStudent,
};

const { studentStorage } = require("../models/student");

//Todo : To create student
function handleCreateStudent(req, res) {
  const studentData = req.body; // incoming data
  try {
    //Todo : Validation
    if (!studentData.name || !studentData.dept || !studentData.course) {
      return res
        .status(404)
        .json({ success: false, message: "All fields are required!" });
    }

    //Todo : To store student data
    studentStorage.push(studentData);

    res
      .status(201)
      .json({ success: true, message: "Student created success!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server error!" });
  }
}
//Todo : to get all students
function getAllStudents(req, res) {
  try {
    if (!studentStorage) {
      return res
        .status(400)
        .json({ success: false, message: "No students data found!" });
    }

    res.status(200).json({
      success: true,
      message: "Fetched all students data!",
      students: studentStorage,
    });
  } catch (error) {
    res.json({ sucess: false, message: "Internal server error!" });
  }
}

//Todo : To list a student
function getStudent(req, res) {
  const name = req.params.name;
  try {
    if (!studentStorage) {
      return res
        .status(400)
        .json({ success: false, message: "No students data found!" });
    }

    // Todo : To find a student
    const matched = studentStorage.find((student) => student.name === name);

    // Todo : Check student
    if (!matched) {
      return res.json({ sucess: false, message: "No student found!" });
    }

    //Success : To client
    res.status(200).json({
      success: true,
      message: "Fetched student data!",
      students: studentStorage[0],
    });
  } catch (error) {
    res.json({ sucess: false, message: "Internal server error!" });
  }
}

module.exports = { handleCreateStudent, getAllStudents, getStudent };

import { employeeCollection as employeeDB } from "../models/employee.js";

// 1. create account
export const handleCreateEmployeeAccount = (req, res) => {
  const employeeData = req.body; // read body
  try {
    // validation
    if (
      !employeeData.name ||
      !employeeData.email ||
      !employeeData.password ||
      !employeeData.role
    ) {
      return res.status(404).json({ message: "All fields are required!" });
    }

    //start - create account
    if (!employeeDB) {
      return res.json({ message: "No employee db found!" });
    }
    employeeDB.push(employeeData);

    // response to client
    res.json({
      message: "employee created success..",
      employee: employeeDB[employeeDB.indexOf(employeeData)],
    });
  } catch (error) {
    console.log(error);
  }
};
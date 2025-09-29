const UserModel = require("../models/user");

async function handleUserRegister(req, res) {
  try {
    const userData = req.body;

    // Validation
    if (!userData) {
      return res
        .status(404)
        .json({ success: false, message: "All fields are required!" });
    }

    // Store user data in db
    const newUser = await UserModel.create(userData);

    // Validate whether data stored or not
    if (!newUser) {
      return res.status(400).json({
        success: false,
        message: "Failed to store user data!",
      });
    }

    res.status(201).json({
      success: true,
      message: "User Registered Success..",
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error });
  }
}

//Get User Data
async function getAllUsers(req, res) {
  const userEmail = req.body;
  console.log(userEmail);

  try {
    const UserData = await UserModel.find({ email: userEmail.email });

    // Validation
    if (!UserData) {
      return res
        .status(404)
        .json({ success: false, message: "No User data found!" });
    }
    // Success res to client
    res.status(200).json({
      success: false,
      message: "User data fetched success..",
      Users: UserData,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error!" });
  }
}

module.exports = { handleUserRegister, getAllUsers };

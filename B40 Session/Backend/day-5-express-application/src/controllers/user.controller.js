import UserModel from "../model/user.model.js";

// Create Account
export const createUserAccount = async (req, res) => {
  const user = req.body;
  try {
    // Data Validation
    if (!user) {
      // Stop Execution
      throw new Error({
        message: "Please fill all the required fields.",
      });
    }

    //Check user exists & Store
    const isUserFound = await UserModel.findOne({ email: user.email });
    if (isUserFound) {
      throw new Error("User already exits. Please go to login.");
    }

    const newUser = await UserModel.insertOne(user);
    if (!newUser) {
      throw new Error("Failed to create user account. Please try again later.");
    }
    // Respond to client req
    res.json({
      error: false,
      message: "User Created Success..",
      user: newUser,
    });
  } catch (error) {
    console.log(error);
    if (error) {
      // Respond to client
      res.json({
        error: true,
        message: error,
      });
      return;
    }
  }
};

// User Login into account
export const UserLogin = async (req, res) => {
  const user = req.body;
  try {
    // Data Validation
    if (!user) {
      // Stop Execution
      throw new Error({
        message: "Please fill all the required fields.",
      });
    }

    //Check user exists
    const isUserFound = await UserModel.findOne({ email: user.email });
    if (!isUserFound) {
      throw new Error(`No User Found ${user.email}`);
    }

    // Respond to client req
    res.json({
      error: false,
      message: "User Logged In Success..",
    });
  } catch (error) {
    console.log(error);
    if (error) {
      // Respond to client
      res.json({
        error: true,
        message: error,
      });
      return;
    }
  }
};

import UserStorage from "../model/user.model.js";

// Create Account
export const createUserAccount = (req, res) => {
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
    UserStorage.push(user);

    // Respond to client req
    res.json({
      error: false,
      message: "User Created Success..",
      user: UserStorage.map((user) => ({
        email: user.email,
        role: user.role,
      })),
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
export const UserLogin = (req, res) => {
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
    const isUserFound = UserStorage.find(
      (regUser) => regUser.email === user.email,
    );
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
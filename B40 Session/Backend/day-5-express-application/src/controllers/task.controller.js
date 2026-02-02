import TaskStorage from "../model/task.model.js";

// Create Account
export const createTask = (req, res) => {
  const task = req.body;
  try {
    // Data Validation
    if (!task) {
      // Stop Execution
      throw new Error({
        message: "Please fill all the required fields.",
      });
    }

    //Check task exists & Store
    TaskStorage.push({
      ...task,
      createdAt: new Date().toLocaleString("en-US"), // Results in "02/02/2026, 20:06:49"
    });

    // Respond to client req
    res.json({
      error: false,
      message: "Task Created Success..",
    });
  } catch (error) {
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
export const UpdateTask = (req, res) => {
  const task = req.body;
  try {
    // Data Validation
    if (!task) {
      // Stop Execution
      throw new Error({
        message: "Please fill all the required fields.",
      });
    }

    //Check user exists
    const isTaskFound = TaskStorage.find(
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

// Get all tasks
export const getAllTasks = (req, res) => {
  try {
    // Storage validation
    if (!TaskStorage) {
      throw new Error("No Storage found in TaskStorage");
    }

    // Respond to client req
    res.json({
      error: false,
      message: "fetched all tasks..",
      tasks: TaskStorage,
    });
  } catch (error) {
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

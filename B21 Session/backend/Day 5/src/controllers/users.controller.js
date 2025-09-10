import storage from "../model/storage.js";

//USER AUTHENTICATION - REGISTER & LOGIN
//Todo : To login-user
export const handleUserLogin = (req, res) => {
  const userData = req.body;
  try {
    if (!userData.name || !userData.password) {
      return res
        .status(404)
        .json({ message: "Username and password are required!" });
    }

    // Find user in storage
    const user = storage.find(
      (u) => u.name === userData.name && u.password === userData.password
    );

    if (user) {
      res
        .status(200)
        .json({ success: true, message: "User LoggedIn Success!" });
    } else {
      res.status(400).json({ success: false, message: "Invalid Credentials!" });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

//Todo : To register a user
export const handleUserRegister = (req, res) => {
  const userData = req.body;
  try {
    //Check user valid
    if (!userData.name || !userData.password) {
      res.json({ message: "Username and password are required!" });
    }
    storage?.push(userData);
    //Success Response to client
    res.status(201).json({
      message: "User Registered Success!",
      user: storage,
    });
  } catch (error) {
    res.json({ succes: false, message: error });
  }
};

//Exports functions - users
// export { handleUserLogin, handleUserRegister };

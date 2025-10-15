import Storage from "../model/storage.js";

function UserRegister(req, res) {
  console.log("worked!");

  try {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    //Check fields
    if (!username || !email || !password) {
      return res.json({ message: "All fields are required!" });
    }

    // Validate user existance
    const isMatch = Storage.find((user) => user.email === email);
    if (isMatch) {
      return res.json({ message: "User already exists. Please go to login!" });
    }

    // To: Create an a acccount
    const newUser = {
      username,
      email,
      password,
    };
    Storage.push(newUser);

    // Send success response
    res.json({ message: "User Registered Success!" });
  } catch (error) {}
  //   res.end("User Registered Success!");
}
function UserLogin(req, res) {
  res.end("User loggedin Success!");
}
function getUserProfile(req, res) {
  try {
    if (Storage.length === 0) {
      return res.json({ message: "No User Data Found!" });
    }
    //Send success response
    res.json({ message: "User profile fetched Success!", Users: Storage });
  } catch (error) {}
  res.end();
}

export { UserRegister, UserLogin, getUserProfile };

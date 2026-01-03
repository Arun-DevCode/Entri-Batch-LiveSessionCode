const Notification = {
  message: "Hi everyone",
};

const handleLogin = () => {
  console.log("User Loggedin success");
  return 5;
};

// Common JS - Import & Exports
// module.exports = { handleLogin, Notification };

// module JS
export default Notification;

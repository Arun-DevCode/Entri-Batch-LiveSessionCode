const jwt = require("jsonwebtoken");

//Payload
const user = {
  email: "ciran@gmail.com",
  isAdmin: true,
  role: "admin",
};

const secretKey = "ciran@2000";

// Generate JWT Token
const token = jwt.sign(user, secretKey, { expiresIn: "30d" });

// const accessToken =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNpcmFuQGdtYWlsLmNvbSIsImlzQWRtaW4iOnRydWUsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc1ODg2NTY1M30.OfqaqIo5j9PjcRer4su2zCJh81eyA7p7T8T7W6sUwUQ";

// Validate JWT Token
function validateUserToken(token, key) {
  try {
    const payload = jwt.verify(token, key);

    if (!payload) {
      console.log("Not have access!");
    } else {
      console.log("have access!");
    }
    return payload;
  } catch (error) {
    return error;
  }
}

const responseMessage = validateUserToken(token, secretKey);

console.log(responseMessage);

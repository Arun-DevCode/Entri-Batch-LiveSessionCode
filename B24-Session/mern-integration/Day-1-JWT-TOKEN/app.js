import JWT from "jsonwebtoken";

// Signature
const payload = {
  email: "testuser@gmail.com",
  admin: true,
};


// Generate Token - Signature
// const token = JWT.sign(payload, secretKey);
// console.log(token);



//Verify Signature
const isVerified = JWT.verify(signedToken, secretKey);

// Decode Signature
const decodedToken = JWT.decode(isVerified);
console.log(isVerified);

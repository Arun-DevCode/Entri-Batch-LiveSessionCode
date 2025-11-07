// JWT NOTES

import JWT from "jsonwebtoken";

// Payload
const user = {
name: "sridhar",
email: "sridhar@gmail.com",
};

const SecretKey = "entri@2023";

// SIGN
// const token = JWT.sign(user, SecretKey);
// console.log(token);

const SignedToken =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3JpZGhhciIsImVtYWlsIjoic3JpZGhhckBnbWFpbC5jb20iLCJpYXQiOjE3NjIzNTY5NDJ9.QfC8tiN0QzEdCCKfhTyheSmk3swF8wM9X116vwfLJUs";

// const decodedPayload = JWT.decode(token);

const isSignVerified = JWT.verify(SignedToken, SecretKey, (err) => {
if (err) {
console.log("Unauthorized user!");
}
});

console.log(isSignVerified);

// bcrypt
import bcrypt from "bcryptjs";

const password = "sridhar@202";

const hashedpassword = bcrypt.hashSync(password, 10);
// const isPasswordCorrect = bcrypt.compare(password, hashedpassword);

async function PasswordCompare(raw, hash) {
const result = await bcrypt.compareSync(raw, hash);
return result;
}
PasswordCompare(password, hashedpassword).then((result) => console.log(result));
// console.log(PasswordCompare(password, hashedpassword));

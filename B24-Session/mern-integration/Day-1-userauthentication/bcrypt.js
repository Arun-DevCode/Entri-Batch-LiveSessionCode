// // Bcryptjs
// import bcrypt from "bcryptjs";

// // Hashing
// const password = "entri@2026.dev";
// // const isHashed = bcrypt.hash();

// // async function getHashedData(raw) {
// //   const isHashed = await bcrypt.hash(raw, 10); // Hashing String
// //   console.log(isHashed);
// //   return isHashed;
// // }

// // getHashedData(password);

// const hashedPassword =
//   "$2b$10$HVX0WXq8iTe1.J5XwlKmpOs6E2sbGE86zqp6QtaCKCUtsnZqedDx.";

// async function validPassword(password, hashed) {
//   const isValid = await bcrypt.compare(password, hashed);
//   console.log("Is password Valid ? : ", isValid);
//   // Valid password
//   if (!isValid) {
//     return console.log("Invalid Credentials! Please provide valid one.");
//   }

//   console.log("User LoggedIn..");
// }

// validPassword(password, hashedPassword);

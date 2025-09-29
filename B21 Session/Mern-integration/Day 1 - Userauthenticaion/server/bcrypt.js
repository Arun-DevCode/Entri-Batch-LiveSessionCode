// const express = require("expres")
const bcrypt = require("bcrypt");

// Generate Salt
// async function securePasswordGen() {
//   const salt = await bcrypt.genSalt(10);
//   console.log(salt);
// }

// // console.log(securePasswordGen);
// securePasswordGen();

// step 1 : hashing with salt(char,num,symbol)
let password = "securepassword@2026"; // securepassword@2026
// let hashedPassword;

async function genHashpassword() {
  // Hashing Password
  const hashpassword = await bcrypt.hash(password, 10);
//   hashedPassword = hashpassword;
  console.log("Hashed Password :", hashpassword);
}
// genHashpassword();

async function comparepassword() {
  const isMatch = await bcrypt.compare(
    password,
    "$2b$10$vb/aZh4Lj9oJnr3gX1wdt.xI9bUaIhY1T3nei.4R8eXQrZ1owyhia"
  );
  console.log(isMatch);

  if (!isMatch) {
    console.log("Invalid Password!");
  } else {
    console.log("Valid Password!");
  }
}

comparepassword();

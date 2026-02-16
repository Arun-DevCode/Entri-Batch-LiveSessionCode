import validator from "express-validator";

// User Data Validation - name , password , email

const nameValid = validator
  .body("name")
  .notEmpty()
  .withMessage("Name is required!")
  .isString()
  .withMessage("Name should be alphabets");

/*
  
  function notEmpty(val){
    if(!val){
     console.log("Name is required!")
    }
    return true
  }

  notEmpty("")
*/

const UserDataValidation = [nameValid];
export default UserDataValidation;

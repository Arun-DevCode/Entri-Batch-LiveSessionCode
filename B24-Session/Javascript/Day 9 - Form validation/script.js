//Elements Selection
// Name Field
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");

// Error Fields - for first,last name
const span = document.getElementsByTagName("span");

// Email & Phone Field
// Email Field
const Email = document.getElementById("email");
// Phone Field
const Phone = document.getElementById("phone");

//DOB & Gender Field
// DOB Field
const DOB = document.getElementById("dob");
// Gender field
const isMale = document.getElementById("");
const isFemale = document.getElementById("");
const isTransGender = document.getElementById("");

//Current Address Fields
const StreetAddressLine1 = document.getElementById("street-addres-1");
const StreetAddressLine2 = document.getElementById("street-addres-2");
const city = document.getElementById("city");
const region = document.getElementById("region");
const zipCode = document.getElementById("zip-code");

// Form Validation
const candidate = {
  first: "",
  last: "",
  email: "",
  phone: "",
  dob: "",
  gender: "",
  currentAddress: {
    line1: "",
    lin2: "",
  },
  city: "",
  region: "",
  zipCode: "",
  country: "",
};

let firstname = "";
// Action Executor
function getFirstName(event) {
  console.log("firstName", event.target.value);
  const fName = event.target.value;
  firstname = fName;
}

// Listen to input changes
firstName.addEventListener("change", getFirstName);

// Prevent form submission refresh
const form = document.querySelector("form"); // or use document.getElementById("yourFormId")
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Form submitted!");
  // Handle your form submission here
  // firstname validation
  if (!firstname) {
    span[0].textContent = "firstname is required!";
    console.log("firstname is required!");
  } else {
    console.log("firstname provided..");
    span[0].textContent = "firstname provided..";
  }
});

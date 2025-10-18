// SELECTING FROM DOM
const Tags = document.querySelectorAll("input");

console.log(Tags);

// Regex for form field
const namePattern = /^[A-Z][a-z]/g;

function inputData(event) {
  event.preventDefault();
  switch (event) {
    case event.target.name === "agentName":
      const name = event.target.value;
      // Validation - Agent Name
      const isNameMatch = namePattern.test(name);
      console.log(isNameMatch);

      // Check name
      if (!isNameMatch) {
        console.log(
          "Name should starts with capital letter,ends with lowercase letter"
        );
      }
      console.log("Valid Name:", name);
      break;
    default:
      console.log("All fields are required!");
      break;
  }
}

// Getting data from each field
Tags.forEach((input) => {
  input.addEventListener("change", inputData);
});

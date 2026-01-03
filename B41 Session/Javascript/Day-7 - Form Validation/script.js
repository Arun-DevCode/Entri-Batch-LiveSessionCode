const form = document.createElement("form");

function createInputs(type, labelName, holderName) {
  const group = document.createElement("div");
  group.style.marginBottom = "12px";

  const label = document.createElement("label");
  label.textContent = labelName;
  label.style.display = "block";

  const input = document.createElement("input");
  input.type = type;
  input.placeholder = holderName;
  input.name = labelName;
  input.style.marginTop = "6px";
  input.style.display = "block";

  // Error message element
  const error = document.createElement("span");
  error.style.color = "red";
  error.style.fontSize = "12px";
  error.style.display = "block";
  error.textContent = ""; // Initially empty

  group.append(label, input, error);
  return { group, input, error };
}

// Create inputs
const usernameGroup = createInputs("text", "Username", "Enter your name");
const emailGroup = createInputs("email", "Email", "Enter your email");
const passwordGroup = createInputs("password", "Password", "*****");

// Append to form
form.append(usernameGroup.group, emailGroup.group, passwordGroup.group);

// Submit button
const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Submit";
submitButton.style.marginTop = "12px";
form.appendChild(submitButton);

// VALIDATION
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Clear previous errors
  usernameGroup.error.textContent = "";
  emailGroup.error.textContent = "";
  passwordGroup.error.textContent = "";

  let valid = true;

  if (usernameGroup.input.value === "") {
    usernameGroup.error.textContent = "Username is required";
    valid = false;
  }

  if (emailGroup.input.value === "") {
    emailGroup.error.textContent = "Email is required";
    valid = false;
  }

  if (passwordGroup.input.value.length < 6) {
    passwordGroup.error.textContent = "Password must be at least 6 characters";
    valid = false;
  }

  if (!valid) return;

  console.log("Form submitted successfully!");
  form.reset();
});

// Append form
document.querySelector("#app").appendChild(form);

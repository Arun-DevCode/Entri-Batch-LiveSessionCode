// Form Element
const form = document.createElement("form");

function createInputs(type, labelName, holderName) {
  const group = document.createElement("div");

  const label = document.createElement("label");
  label.textContent = labelName;

  const input = document.createElement("input");
  input.type = type;
  input.placeholder = holderName;
  input.name = labelName;

  input.style.marginTop = "12px";

  group.append(label, input);
  return group;
}

// Create inputs
const usernameGroup = createInputs("text", "Username", "Enter your name");
const emailGroup = createInputs("email", "Email", "Enter your email");
const passwordGroup = createInputs("password", "Password", "*****");

// Get inputs
const username = usernameGroup.querySelector("input");
const email = emailGroup.querySelector("input");
const password = passwordGroup.querySelector("input");

// Append to form
form.append(usernameGroup, emailGroup, passwordGroup);

// Submit button
const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Submit";
submitButton.style.marginTop = "12px";
form.appendChild(submitButton);


// VALIDATION
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (username.value === "") {
    alert("Username is required");
    return;
  }

  if (email.value === "") {
    alert("Email is required");
    return;
  }

  if (password.value.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  }

  console.log("Form submitted successfully!");
  form.reset();
});

// Append form
document.querySelector("#app").appendChild(form);

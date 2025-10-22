const model = document.querySelector(".dialog_model");
const feedbackBtn = document.querySelector(".feedback_btn");
const formContainer = document.querySelector("#feedback_formContainer");
const closeButton = document.querySelector("#close_btn");

// Add functionality to button
feedbackBtn.addEventListener("click", (event) => {
    // formContainer.style.display = "none";
    formContainer.style.visibility = "visible";
});

closeButton.addEventListener("click", () => {
    // formContainer.style.display = "block";
    formContainer.style.visibility = "hidden";
});

// 1. text
// URL : https://cdn.jsdelivr.net/npm/@googleapis/js-genai@latest/dist/index.min.js

import {
  Files,
  Models,
} from "https://cdn.jsdelivr.net/npm/@googleapis/js-genai@latest/dist/index.min.js";



// Create a client instance
const ai = {
  files: new Files({ apiKey: "YOUR_API_KEY" }),
  models: new Models({ apiKey: "YOUR_API_KEY" }),
};

const fileInput = document.getElementById("fileInput");
const uploadBtn = document.getElementById("uploadBtn");
const status = document.getElementById("status");
const result = document.getElementById("result");

uploadBtn.addEventListener("click", async () => {
  if (!fileInput.files.length) {
    alert("Please select a file first!");
    return;
  }

  const file = fileInput.files[0];
  status.textContent = `Uploading ${file.name}...`;

  try {
    const uploadedFile = await filesClient.upload({
      file: file,
      purpose: "fine-tune", // or "answers" depending on your use case
    });

    status.textContent = `Upload successful!`;
    result.textContent = JSON.stringify(uploadedFile, null, 2);
  } catch (error) {
    status.textContent = "Upload failed!";
    console.error(error);
  }
});

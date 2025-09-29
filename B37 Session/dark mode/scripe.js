// Check for saved theme or default to light mode
const currentTheme = "dark" || "light";
document.body.classList.toggle("dark", currentTheme === "dark");

function toggleTheme() {
  document.body.classList.toggle("dark");

  // Save theme preference
  const theme = document.body.classList.contains("dark") ? "dark" : "light";
}

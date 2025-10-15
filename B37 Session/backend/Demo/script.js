const body = document.querySelector("body");

// button - create
const button = document.createElement("button");
button.textContent = "Get Mobiles";

body.appendChild(button);

// Try different CORS proxies
const proxies = [
  "https://api.allorigins.win/raw?url=",
  "https://corsproxy.io/?",
  "https://api.codetabs.com/v1/proxy?quest=",
];

let searchInput = "mobile";

const flipkartUrl = `https://www.flipkart.com/search?q=${encodeURIComponent(
  searchInput
)}`;

const proxyUrl = proxies[0] + encodeURIComponent(flipkartUrl);

// Todo : To get all users list
async function getAllUsersList() {
  try {
    const response = await fetch(proxyUrl);

    // Check if response is ok
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Since it's HTML, use .text() instead of .json()
    const data = await response.text(); // Fixed: Added 'await'

    console.log(data);
    console.log("Data length:", data.length, "bytes");

    // Optional: Parse the HTML to extract product info
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");
    console.log("Parsed HTML:", doc);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Event
button.addEventListener("click", getAllUsersList);

const url = `https://easy-weather1.p.rapidapi.com/daily/5?latitude=1.28&longitude=103.86`;

// API Request Header
const apiConfig = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "easy-weather1.p.rapidapi.com",
    "x-rapidapi-key": "",
  },
};

// To get weather data
async function getWeatherData() {
  const res = await fetch(url, apiConfig);
  const data = await res.json(); // parse -> object
  console.table(data);
  return data;
}

// getWeatherData();
const button = document.querySelector("button");

// Event add to get data
button.addEventListener("click", getWeatherData);
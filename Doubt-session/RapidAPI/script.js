// const url = `https://easy-weather1.p.rapidapi.com/daily/5?latitude=1.28&longitude=103.86`;
const newsApiUrl = ``;

// API Request Header
const apiConfig = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "real-time-news-data.p.rapidapi.com",
    "x-rapidapi-key": "",
  },
};

// To get weather data
async function getWeatherData() {
  const res = await fetch(newsApiUrl, apiConfig);
  const data = await res.json(); // parse -> object
  console.table(data);
  return data;
}

// getWeatherData();
const button = document.querySelector("button");

// Event add to get data
button.addEventListener("click", getWeatherData);
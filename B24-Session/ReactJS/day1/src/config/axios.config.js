import axios from "axios";

// config
const axiosConfig = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export default axiosConfig;

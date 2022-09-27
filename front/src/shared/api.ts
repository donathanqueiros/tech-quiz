//create axios instance with base url
import axios from "axios";

const baseURL = process.env["BASE_URL"];
console.log(baseURL);

const api = axios.create({
  baseURL: baseURL ? baseURL + "/api" : "/api",
});

export default api;

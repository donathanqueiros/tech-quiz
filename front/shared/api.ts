//create axios instance with base url
import axios from "axios";

const baseURL = process.env["VERCEL_URL"];
console.log(baseURL);

const api = axios.create({
  baseURL: baseURL + "/api",
});

export default api;

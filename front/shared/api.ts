//create axios instance with base url
import axios from "axios";

const baseURL = process.env["BASE_URL"];

const api = axios.create({
  baseURL: baseURL + "/api",
});

export default api;

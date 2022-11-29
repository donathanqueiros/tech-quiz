import axios from "axios";

const baseURL = process.env["BASE_URL"];
console.log("BASE_URL:" + baseURL);

const api = axios.create({
  baseURL: baseURL ? baseURL + "/api" : "/api",
});

export default api;

import axios from "axios";

const baseURL = process.env["BASE_URL"] || "http://localhost:3000";
console.log("BASE_URL:" + baseURL);

const api = axios.create({
  baseURL: baseURL ? baseURL + "/api" : "/api",
});

export default api;

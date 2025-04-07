import axios from "axios";

// Set Base URL from .env file
const API = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
});

// Automatically attach Token to Headers if exists
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// Handle Common Errors Globally
API.interceptors.response.use(
  (response) => response,
  (error) => {
    // Check if Token Expired or Unauthorized Access
    if (error.response && error.response.status === 401) {
      alert("Session expired! Please login again.");
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

// Exporting API for Usage
export default API;

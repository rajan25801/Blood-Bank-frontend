import API from "../../../services/API";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Login User
export const userLogin = createAsyncThunk(
  "auth/login",
  async (formData, { rejectWithValue }) => {
    try {
      console.log("Logging in with data:", formData); // Debugging

      if (!formData.role) {
        return rejectWithValue({ success: false, message: "Role is required!" });
      }

      const response = await API.post("/auth/login", formData);
      localStorage.setItem("token", response.data.token);
      console.log("Login successful:", response.data); // Debugging
      return response.data;
    } catch (error) {
      console.error("Login error:", error.response ? error.response.data : error.message);
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

// Register User
export const userRegister = createAsyncThunk(
  "auth/register",
  async (formData, { rejectWithValue }) => {
    try {
      console.log("Registering user with data:", formData); // Debugging

      if (!formData.role) {
        return rejectWithValue({ success: false, message: "Role is required!" });
      }

      const response = await API.post("/auth/register", formData);
      localStorage.setItem("token", response.data.token);
      console.log("Registration successful:", response.data); // Debugging
      return response.data;
    } catch (error) {
      console.error("Register error:", error.response ? error.response.data : error.message);
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

// Get Current User
export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        return rejectWithValue({ success: false, message: "No token found!" });
      }

      const response = await API.get("/auth/current-user", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Current user fetched:", response.data); // Debugging
      return response.data;
    } catch (error) {
      console.error("Fetch user error:", error.response ? error.response.data : error.message);
      localStorage.removeItem("token");
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

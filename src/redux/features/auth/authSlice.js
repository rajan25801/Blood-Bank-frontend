import { createSlice } from "@reduxjs/toolkit";
import { userLogin, userRegister, getCurrentUser } from "./authActions";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        console.log("userLogin fulfilled:", action.payload);
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(userLogin.rejected, (state, action) => {
        console.error("userLogin rejected:", action.payload);
        state.loading = false;
        state.error = action.payload || "Login failed";
      })
      .addCase(userRegister.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        console.log("userRegister fulfilled:", action.payload);
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(userRegister.rejected, (state, action) => {
        console.error("userRegister rejected:", action.payload);
        state.loading = false;
        state.error = action.payload || "Registration failed";
      })
      .addCase(getCurrentUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(getCurrentUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.user = null;
        localStorage.removeItem("token");
      });
      
  },
});

export default authSlice.reducer;

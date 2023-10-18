import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthSchema } from "../types";
import { login } from "../api/login";
import { refresh } from "../api/refresh";
import { logout } from "../api/logout";

const initialState: AuthSchema = {
  username: "",
  password: 123,
  isLoading: false,
  isAuth: false,
  isAuthInProgress: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setIsAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setIsAuthInProgress: (state, action: PayloadAction<boolean>) => {
      state.isAuthInProgress = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isAuthInProgress = true;
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state) => {
        state.isAuth = true;
        state.isAuthInProgress = false;
        state.isLoading = false;
      })
      .addCase(login.rejected, (state) => {
        state.isAuthInProgress = false;
        state.isLoading = false;
      })
      .addCase(refresh.pending, (state) => {
        state.isAuthInProgress = true;
        state.isLoading = true;
      })
      .addCase(refresh.fulfilled, (state) => {
        state.isAuth = true;
        state.isAuthInProgress = false;
        state.isLoading = false;
      })
      .addCase(refresh.rejected, (state) => {
        state.isAuthInProgress = false;
        state.isLoading = false;
      })
      .addCase(logout.pending, (state) => {
        state.isAuthInProgress = true;
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isAuth = false;
        state.isAuthInProgress = false;
        state.isLoading = false;
      })
      .addCase(logout.rejected, (state) => {
        state.isAuthInProgress = false;
        state.isLoading = false;
      });
  },
});

export const { reducer: authReducer, actions: authActions } = authSlice;

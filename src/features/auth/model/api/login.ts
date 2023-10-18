import { createAsyncThunk } from "@reduxjs/toolkit";

import { AuthService } from "@/shared/api/auth";
import { AuthSchema } from "../types";
import { LOCALSTORAGE_AUTH_TOKEN } from "@/shared/lib/constants";
import { ThunkConfig } from "@/app/providers/rtk-provider";

type AuthDataType = Pick<AuthSchema, "username" | "password">;

export const login = createAsyncThunk<any, AuthDataType, ThunkConfig<string>>(
  "login/login",
  async (authData, thunkAPI): Promise<any> => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await AuthService.login(authData);

      if (!response.data) {
        return rejectWithValue("no data");
      }

      window.localStorage.setItem(
        LOCALSTORAGE_AUTH_TOKEN,
        response.data.accessToken,
      );

      return response.data;
    } catch (e) {
      if (e instanceof Error) {
        return rejectWithValue(e.message);
      }
    }
  },
);

import { createAsyncThunk } from "@reduxjs/toolkit";

import { AuthService } from "@/shared/api/auth";
import { LOCALSTORAGE_AUTH_TOKEN } from "@/shared/lib/constants";
import { ThunkConfig } from "@/app/providers/rtk-provider";

export const refresh = createAsyncThunk<any, any, ThunkConfig<string>>(
  "refresh/refresh",
  async (_, thunkAPI): Promise<any> => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await AuthService.refreshToken();

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

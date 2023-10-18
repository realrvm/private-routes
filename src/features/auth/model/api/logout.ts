import { createAsyncThunk } from "@reduxjs/toolkit";

import { AuthService } from "@/shared/api/auth";
import { LOCALSTORAGE_AUTH_TOKEN } from "@/shared/lib/constants";
import { ThunkConfig } from "@/app/providers/rtk-provider";

export const logout = createAsyncThunk<any, any, ThunkConfig<string>>(
  "logout/logout",
  async (_, thunkAPI): Promise<any> => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await AuthService.logout();

      if (!response.data) {
        return rejectWithValue("no data");
      }

      window.localStorage.removeItem(LOCALSTORAGE_AUTH_TOKEN);

      return response.data;
    } catch (e) {
      if (e instanceof Error) {
        return rejectWithValue(e.message);
      }
    }
  },
);

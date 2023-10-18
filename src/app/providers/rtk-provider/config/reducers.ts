import { ReducersMapObject } from "@reduxjs/toolkit";

import { authReducer } from "@/features/auth";
import { StateSchema } from "./schema";

export const reducers: ReducersMapObject<StateSchema> = {
  auth: authReducer,
};

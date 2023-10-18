import { StateSchema } from "@/app/providers/rtk-provider";

export const getIsAuth = (state: StateSchema) => state.auth.isAuth;

import { StateSchema } from "@/app/providers/rtk-provider";

export const getIsAuthInProgress = (state: StateSchema) =>
  state.auth.isAuthInProgress;

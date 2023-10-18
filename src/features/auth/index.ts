export type { AuthSchema } from "./model/types";

export { authReducer, authActions } from "./model/slice/authSlice";

export { getIsAuth } from "./model/selector/getIsAuth";
export { getIsAuthInProgress } from "./model/selector/getIsAuthInProgress";

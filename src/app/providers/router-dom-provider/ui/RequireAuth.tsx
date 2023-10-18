import { Navigate, useLocation } from "react-router-dom";

import { useStateSelector } from "@/app/providers/rtk-provider";
import { getIsAuth, getIsAuthInProgress } from "@/features/auth";

export function RequireAuth({ children }: { children: JSX.Element }) {
  let isAuthInProgress = useStateSelector(getIsAuthInProgress);
  let isAuth = useStateSelector(getIsAuth);
  let location = useLocation();

  if (isAuthInProgress) {
    return <div>Checking auth...</div>;
  }

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

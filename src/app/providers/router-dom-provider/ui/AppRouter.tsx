import { FC } from "react";
import { Outlet } from "react-router-dom";

type AppRouterProps = Record<string, never>;

export const AppRouter: FC<AppRouterProps> = () => {
  return <Outlet />;
};

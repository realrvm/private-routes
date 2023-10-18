import { ReactNode } from "react";
import { createBrowserRouter } from "react-router-dom";

import { Routes } from "../types";
import App from "@/app/App";
import { RequireAuth } from "../ui/RequireAuth";

const routes: Record<Routes, ReactNode> = {
  [Routes.MAIN]: <div>app component</div>,
  [Routes.CONTENT]: (
    <RequireAuth>
      <div>content</div>
    </RequireAuth>
  ),
  [Routes.LOGIN]: <div>login</div>,
  [Routes.LOGOUT]: (
    <RequireAuth>
      <div>logout</div>
    </RequireAuth>
  ),
  [Routes.REFRESH]: (
    <RequireAuth>
      <div>refresh</div>
    </RequireAuth>
  ),
  [Routes.NOT_FOUND]: <div>404: not found</div>,
};

export const router = createBrowserRouter([
  {
    element: <App />,
    children: Object.entries(routes).map(([path, element]) => ({
      path,
      element,
    })),
  },
]);

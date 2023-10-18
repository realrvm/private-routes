import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../types";
import { useMemo } from "react";
import { ActionCreatorsMapObject, bindActionCreators } from "@reduxjs/toolkit";

export const useAppDispatch = useDispatch<AppDispatch>;
export const useStateSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useActionCreators = (actions: ActionCreatorsMapObject) => {
  const dispatch = useAppDispatch();

  return useMemo(
    () => bindActionCreators(actions, dispatch),
    [actions, dispatch],
  );
};

import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { stateReducer } from "./reducers/statesSlice";
import { catalogReducer } from "./reducers/catalogSlice";

export const store = configureStore({
  reducer: {
    states: stateReducer,
    catalog: catalogReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

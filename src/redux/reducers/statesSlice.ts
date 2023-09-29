import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IStatesSlice {
  menu: boolean;
}

const initialState = {
  menu: false,
};

const statesStateSlice = createSlice({
  name: "states",
  reducers: {
    setMenu(state, action: PayloadAction<boolean>) {
      state.menu = action.payload;
    },
  },
  initialState,
});

export const stateReducer = statesStateSlice.reducer;
export const { setMenu } = statesStateSlice.actions;

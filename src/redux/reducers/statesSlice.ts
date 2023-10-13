import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IStatesSlice {
  headerMenu: boolean;
}

const initialState: IStatesSlice = {
  headerMenu: false,
};

const statesStateSlice = createSlice({
  initialState,
  name: "states",
  reducers: {
    setHeaderMenu(state, action: PayloadAction<boolean>) {
      state.headerMenu = action.payload;
    },
  },
});

export const stateReducer = statesStateSlice.reducer;
export const { setHeaderMenu } = statesStateSlice.actions;

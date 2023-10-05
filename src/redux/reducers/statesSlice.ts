import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IStatesSlice {
  menu: boolean;
}

const initialState = {
  headerMenu: false,
};

const statesStateSlice = createSlice({
  name: "states",
  reducers: {
    setHeaderMenu(state, action: PayloadAction<boolean>) {
      if (action.payload) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "visible";
      }
      state.headerMenu = action.payload;
    },
  },
  initialState,
});

export const stateReducer = statesStateSlice.reducer;
export const { setHeaderMenu } = statesStateSlice.actions;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IStatesSlice {
  menu: boolean;
  catalogMenu: boolean;
}

const initialState = {
  headerMenu: false,
  catalogMenu: false,
};

const statesStateSlice = createSlice({
  initialState,
  name: "states",
  reducers: {
    setHeaderMenu(state, action: PayloadAction<boolean>) {
      state.headerMenu = action.payload;
    },
    setCatalogMenu(state, action: PayloadAction<boolean>) {
      state.catalogMenu = action.payload;
    },
  },
});

export const stateReducer = statesStateSlice.reducer;
export const { setHeaderMenu, setCatalogMenu } = statesStateSlice.actions;

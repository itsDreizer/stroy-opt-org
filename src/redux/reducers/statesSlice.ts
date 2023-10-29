import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IStatesSlice {
  headerMenu: boolean;
  windowWidth: number;
  isCallModalVisible: boolean;
}

const initialState: IStatesSlice = {
  headerMenu: false,
  windowWidth: window.innerWidth,
  isCallModalVisible: false,
};

const statesStateSlice = createSlice({
  initialState,
  name: "states",
  reducers: {
    setHeaderMenu(state, action: PayloadAction<boolean>) {
      state.headerMenu = action.payload;
    },
    setWindowWidth(state, action: PayloadAction<number>) {
      state.windowWidth = action.payload;
    },
    setIsCallModalVisible(state, action: PayloadAction<boolean>) {
      state.isCallModalVisible = action.payload;
    },
  },
});

export const stateReducer = statesStateSlice.reducer;
export const { setHeaderMenu, setWindowWidth, setIsCallModalVisible } = statesStateSlice.actions;

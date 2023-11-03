import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IStatesSlice {
  isHeaderMenuVisible: boolean;
  windowWidth: number;
  isCallModalVisible: boolean;
}

const initialState: IStatesSlice = {
  isHeaderMenuVisible: false,
  windowWidth: window.innerWidth,
  isCallModalVisible: false,
};

const statesStateSlice = createSlice({
  initialState,
  name: "states",
  reducers: {
    setIsHeaderMenuVisible(state, action: PayloadAction<boolean>) {
      state.isHeaderMenuVisible = action.payload;
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
export const { setIsHeaderMenuVisible, setWindowWidth, setIsCallModalVisible } = statesStateSlice.actions;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IMenuTab } from "../../components/UI/menuTabs/MenuTab";

interface ICatalogSlice {
  isMenuVisible: boolean;
  currentTab: string | null;
}

const initialState: ICatalogSlice = {
  isMenuVisible: false,
  currentTab: null,
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    setCatalogVisible(state, action: PayloadAction<boolean>) {
      state.isMenuVisible = action.payload;
    },
    setCurrentTab(state, action: PayloadAction<string | null>) {
      state.currentTab = action.payload;
    },
  },
});

export const catalogReducer = catalogSlice.reducer;
export const { setCatalogVisible, setCurrentTab } = catalogSlice.actions;

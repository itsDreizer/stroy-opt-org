import { createRef } from "react";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IMenuTab } from "../../components/UI/menuTabs/MenuTab";

interface ICatalogSlice {
  isMenuVisible: boolean;
  currentTab: { id: string; value: string };
  currentSubTab: { id: string; value: string };
  tabs: {
    title?: string;
    tabID: string;
  }[];
  subTabs: {
    children?: { title: string; subTabID: string }[];
    subTabsID: string;
  }[];
  links: {
    children?: { title: string; to: string }[];
    linksID: string;
  }[];
}

const initialState: ICatalogSlice = {
  isMenuVisible: false,
  currentTab: { id: "", value: "" },
  currentSubTab: { id: "", value: "" },
  tabs: [
    {
      title: `Водо-газоснабжение, отопление, вентиляция`,
      tabID: "0",
    },
    {
      title: `Общестроительные материалы`,
      tabID: "1",
    },
    {
      title: `Всё для сауны и бани`,
      tabID: "2",
    },
    {
      title: `Инструмент`,
      tabID: "3",
    },
    {
      title: `Отделочные материалы`,
      tabID: "4",
    },
    {
      title: `Сантехника`,
      tabID: "5",
    },
    {
      title: `Метизные, такелажные и скобяные изделия`,
      tabID: "6",
    },
    {
      title: `Спецодежда и средства индивидуальной и пожарной защиты`,
      tabID: "7",
    },
    {
      title: `Столярные изделия`,
      tabID: "8",
    },
    {
      title: `Товары для дома, сада и огорода`,
      tabID: "9",
    },
    {
      title: `Электротовары`,
      tabID: "10",
    },
  ],
  subTabs: [
    {
      children: [
        { title: `1`, subTabID: `0` },
        { title: `2`, subTabID: `1` },
        { title: `3`, subTabID: `2` },
        { title: `4`, subTabID: `3` },
        { title: `5`, subTabID: `4` },
      ],
      subTabsID: `0`,
    },
    {
      children: [
        { title: `???`, subTabID: `5` },
        { title: `123`, subTabID: `6` },
        { title: `312`, subTabID: `7` },
      ],
      subTabsID: `1`,
    },
    {
      children: [
        { title: `Измерительно-разметочный инструмент`, subTabID: `8` },
        { title: `Ручной инструмент`, subTabID: `9` },
        { title: `Сварочное оборудование`, subTabID: `10` },
        { title: `Строительное оборудование`, subTabID: `11` },
        { title: `Штукатурно-отделочные инструменты`, subTabID: `12` },
        { title: `Электроинструмент`, subTabID: `13` },
      ],
      subTabsID: `3`,
    },
  ],
  links: [
    {
      children: [
        { title: `Вибротехника и комплектующие`, to: "/" },
        { title: `Генераторы и комплектующие`, to: "/" },
        { title: `Дрели, шуруповерты и гайковерты`, to: "/" },
        { title: `Краскопульты электрические, компрессоры, гвоздезабиватели`, to: "/" },
        { title: `Миксеры строительные`, to: "/" },
        { title: `Отбойные молотки`, to: "/" },
        { title: `Перфораторы`, to: "/" },
        { title: `Граверы`, to: "/" },
        { title: `Фрезеры`, to: "/" },
        { title: `Шлифовальные машины и многофункциональный инструмент`, to: "/" },
        { title: `Штроборезы и приспособления`, to: "/" },
        { title: `Электролобзики`, to: "/" },
        { title: `Мотопомпы и комплектующие`, to: "/" },
        { title: `Мультиметры`, to: "/" },
        { title: `Пилы`, to: "/" },
        { title: `Плиткорез`, to: "/" },
        { title: `Пневмоинструменты, компрессоры и комплектующие`, to: "/" },
        { title: `Пуско-зарядные и зарядные устройства`, to: "/" },
        { title: `Расходные материалы и оснастка для электроинструмента`, to: "/" },
        { title: `Стабилизаторы напряжения`, to: "/" },
      ],
      linksID: "13",
    },
  ],
};

const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    setCatalogVisible(state, action: PayloadAction<boolean>) {
      state.isMenuVisible = action.payload;
    },
    setCurrentTab(state, action: PayloadAction<{ id: string; value: string }>) {
      state.currentTab = action.payload;
    },
    setCurrentSubTab(state, action: PayloadAction<{ id: string; value: string }>) {
      state.currentSubTab = action.payload;
    },
  },
});

export const catalogReducer = catalogSlice.reducer;
export const { setCatalogVisible, setCurrentTab, setCurrentSubTab } = catalogSlice.actions;

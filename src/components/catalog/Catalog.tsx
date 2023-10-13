import React, { useRef, useState, useMemo, useEffect, createRef } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import CatalogTabs from "./CatalogTabs";
import MenuTab, { IMenuTab } from "../UI/menuTabs/MenuTab";
import CatalogSubTabs from "./CatalogSubTabs";
import MenuSubTab, { IMenuSubTab } from "../UI/menuTabs/MenuSubTab";
import { setCurrentTab } from "../../redux/reducers/catalogSlice";
import "./Catalog.scss";

interface IObjectTab {
  title?: string;
  tabID: string;
}

interface IObjectSubTab {
  children?: { title: string; subTabId: string }[];
  subTabsID: string;
  nodeRef: React.MutableRefObject<null>;
}

const Catalog: React.FC = () => {
  const dispatch = useAppDispatch();
  const isCatalogVisible = useAppSelector((state) => {
    return state.catalog.isMenuVisible;
  });

  const currentTab = useAppSelector((state) => {
    return state.catalog.currentTab;
  });
  const catalogRef = useRef<HTMLDivElement>(null);
  const catalogTabsRef = useRef<HTMLUListElement>(null);
  const subTabsRef = useRef(null);

  const setTab = (e: React.MouseEvent<HTMLDivElement>) => {
    dispatch(setCurrentTab(e.currentTarget.dataset.tab ? e.currentTarget.dataset.tab : null));
  };

  // const tabs: IObjectTab[] = [{

  // }]

  const subTabs: IObjectSubTab[] = [
    {
      children: [
        { title: `Измерительно-разметочный инструмент`, subTabId: `0` },
        { title: `Ручной инструмент`, subTabId: `1` },
        { title: `Сварочное оборудование`, subTabId: `2` },
        { title: `Строительное оборудование`, subTabId: `3` },
        { title: `Штукатурно-отделочные инструменты`, subTabId: `4` },
        { title: `Электроинструмент`, subTabId: `5` },
      ],
      subTabsID: `0`,
      nodeRef: createRef(),
    },
    {
      children: [
        { title: `???`, subTabId: `6` },
        { title: `123`, subTabId: `7` },
        { title: `312`, subTabId: `9` },
      ],
      subTabsID: `1`,
      nodeRef: createRef(),
    },
    {
      children: [],
      subTabsID: `2`,
      nodeRef: createRef(),
    },
  ];

  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={isCatalogVisible}
      classNames={"catalog"}
      nodeRef={catalogRef}
      timeout={700}>
      <div ref={catalogRef} className="catalog">
        <div className="catalog__container">
          <div className="catalog-body">
            <CatalogTabs ref={catalogTabsRef}>
              <MenuTab
                currentTab={currentTab ? currentTab : ""}
                tabID="0"
                onClick={setTab}
                className="catalog-tabs__tab">
                Водо-газоснабжение, отопление, вентиляция
              </MenuTab>
              <MenuTab
                currentTab={currentTab ? currentTab : ""}
                tabID="1"
                onClick={setTab}
                className="catalog-tabs__tab">
                Общестроительные материалы
              </MenuTab>
              <MenuTab
                currentTab={currentTab ? currentTab : ""}
                tabID="2"
                onClick={setTab}
                className="catalog-tabs__tab">
                Всё для сауны и бани
              </MenuTab>
              <MenuTab
                currentTab={currentTab ? currentTab : ""}
                tabID="3"
                onClick={setTab}
                className="catalog-tabs__tab">
                Инструмент
              </MenuTab>
              <MenuTab
                currentTab={currentTab ? currentTab : ""}
                tabID="4"
                onClick={setTab}
                className="catalog-tabs__tab">
                Отделочные материалы
              </MenuTab>
              <MenuTab
                currentTab={currentTab ? currentTab : ""}
                tabID="5"
                onClick={setTab}
                className="catalog-tabs__tab">
                Сантехника
              </MenuTab>
              <MenuTab
                currentTab={currentTab ? currentTab : ""}
                tabID="6"
                onClick={setTab}
                className="catalog-tabs__tab">
                Метизные, такелажные и скобяные изделия
              </MenuTab>
              <MenuTab
                currentTab={currentTab ? currentTab : ""}
                tabID="7"
                onClick={setTab}
                className="catalog-tabs__tab">
                Спецодежда и средства индивидуальной и пожарной защиты
              </MenuTab>
              <MenuTab
                currentTab={currentTab ? currentTab : ""}
                tabID="8"
                onClick={setTab}
                className="catalog-tabs__tab">
                Столярные изделия
              </MenuTab>
              <MenuTab
                currentTab={currentTab ? currentTab : ""}
                tabID="9"
                onClick={setTab}
                className="catalog-tabs__tab">
                Товары для дома, сада и огорода
              </MenuTab>
              <MenuTab
                currentTab={currentTab ? currentTab : ""}
                tabID="10"
                onClick={setTab}
                className="catalog-tabs__tab">
                Электротовары
              </MenuTab>
            </CatalogTabs>
            <TransitionGroup className={"catalog-sub-tabs-wrapper"}>
              {subTabs.map((subTab, index) => {
                return currentTab === subTab.subTabsID ? (
                  <CSSTransition
                    classNames={"catalog-sub-tabs"}
                    key={subTab.subTabsID}
                    timeout={700}
                    nodeRef={subTab.nodeRef}>
                    <CatalogSubTabs ref={subTab.nodeRef}>
                      {subTab.children?.map((tab) => {
                        return (
                          <MenuSubTab key={tab.title} tabID={tab.subTabId}>
                            {tab.title}
                          </MenuSubTab>
                        );
                      })}
                    </CatalogSubTabs>
                  </CSSTransition>
                ) : (
                  false
                );
              })}
            </TransitionGroup>
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Catalog;

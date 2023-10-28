import React, { createRef } from "react";
import { DefaultProps } from "../../types";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Menu from "../menu/Menu";

import { setCatalogVisible, setCurrentSubTab, setCurrentTab } from "../../redux/reducers/catalogSlice";

import MenuTab from "../UI/menuTabs/MenuTab";
import "./Catalog.scss";
import CatalogTabs from "./CatalogTabs";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import MenuSubTab from "../UI/menuTabs/MenuSubTab";
import CatalogSubTabs from "./CatalogSubTabs";
import "./MobileCatalog.scss";
import CatalogLinks from "./CatalogLinks";
import CatalogLink from "./CatalogLink";

interface IMobileCatalogProps extends DefaultProps {}

const MobileCatalog: React.FC = () => {
  const { isMenuVisible, currentTab, currentSubTab, tabs, subTabs, links } = useAppSelector((state) => {
    return state.catalog;
  });

  const dispatch = useAppDispatch();

  const setSubTabs = (e: React.MouseEvent<HTMLLIElement>) => {
    dispatch(
      setCurrentTab({
        id: e.currentTarget.dataset.tab ? e.currentTarget.dataset.tab : "",
        value: e.currentTarget.textContent ? e.currentTarget.textContent : "",
      })
    );
  };

  const setLinks = (e: React.MouseEvent<HTMLLIElement>) => {
    dispatch(
      setCurrentSubTab({
        id: e.currentTarget.dataset.subTab ? e.currentTarget.dataset.subTab : "",
        value: e.currentTarget.textContent ? e.currentTarget.textContent : "",
      })
    );
  };

  const goBack = () => {
    if (currentSubTab.id) {
      dispatch(setCurrentSubTab({ value: "", id: "" }));
    } else if (currentTab.id) {
      dispatch(setCurrentTab({ value: "", id: "" }));
    }
  };

  

  return (
    <Menu
      onExited={() => {
        dispatch(setCurrentTab({ id: "", value: "" }));
        dispatch(setCurrentSubTab({ id: "", value: "" }));
      }}
      className={`catalog-menu`}
      title={currentSubTab.value || currentTab.value || "Каталог"}
      isMenuVisible={isMenuVisible}
      closeMenuAction={setCatalogVisible}
      isArrowBackVisible={!!currentTab.id}
      goBack={goBack}>
      <CatalogTabs className="catalog-menu-tabs">
        {tabs.map((tab) => {
          return (
            <MenuTab onClick={setSubTabs} key={tab.tabID} currentTab={currentTab.id} tabID={tab.tabID}>
              {tab.title}
            </MenuTab>
          );
        })}
      </CatalogTabs>
      <TransitionGroup className={"catalog-menu__sub-tabs-wrapper"}>
        {subTabs.map((tabs) => {
          const nodeRef = createRef<HTMLUListElement>();
          return currentTab.id === tabs.subTabsID ? (
            <CSSTransition
              classNames={"catalog-menu-sub-tabs"}
              nodeRef={nodeRef}
              key={tabs.subTabsID}
              unmountOnExit
              mountOnEnter
              timeout={700}>
              <CatalogSubTabs className="catalog-menu-sub-tabs" ref={nodeRef}>
                {tabs.children?.map((tab) => {
                  return (
                    <MenuSubTab
                      onClick={setLinks}
                      key={tab.subTabID}
                      currentTab={currentSubTab.id}
                      tabID={tab.subTabID}>
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
      <TransitionGroup className={"catalog-menu__links-wrapper"}>
        {links.map((linksBlock) => {
          const nodeRef = createRef<HTMLUListElement>();
          return currentSubTab.id === linksBlock.linksID ? (
            <CSSTransition
              unmountOnExit
              mountOnEnter
              classNames={"catalog-menu-links"}
              timeout={700}
              key={linksBlock.linksID}
              nodeRef={nodeRef}>
              <CatalogLinks ref={nodeRef} className="catalog-menu-links">
                {linksBlock.children?.map((link) => {
                  return (
                    <CatalogLink to={link.to} key={link.to + link.title}>
                      {link.title}
                    </CatalogLink>
                  );
                })}
              </CatalogLinks>
            </CSSTransition>
          ) : (
            false
          );
        })}
      </TransitionGroup>
    </Menu>
  );
};

export default MobileCatalog;

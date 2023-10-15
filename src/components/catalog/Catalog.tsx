import React, { createRef, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { setCurrentSubTab, setCurrentTab } from "../../redux/reducers/catalogSlice";
import MenuSubTab from "../UI/menuTabs/MenuSubTab";
import MenuTab from "../UI/menuTabs/MenuTab";
import CatalogSubTabs from "./CatalogSubTabs";
import CatalogTabs from "./CatalogTabs";

import "./Catalog.scss";
import { Link } from "react-router-dom";
import CatalogLinks from "./CatalogLinks";
import CatalogLink from "./CatalogLink";

const Catalog: React.FC = () => {
  const dispatch = useAppDispatch();

  const {
    isMenuVisible: isCatalogVisible,
    currentTab,
    currentSubTab,
    tabs,
    subTabs,
    links,
  } = useAppSelector((state) => {
    return state.catalog;
  });

  const catalogRef = useRef<HTMLDivElement>(null);

  const setTab = (e: React.MouseEvent<HTMLLIElement>) => {
    dispatch(setCurrentTab(e.currentTarget.dataset.tab ? e.currentTarget.dataset.tab : ""));
    dispatch(setCurrentSubTab(""));
  };

  const setSubTab = (e: React.MouseEvent<HTMLLIElement>) => {
    dispatch(setCurrentSubTab(e.currentTarget.dataset.subTab ? e.currentTarget.dataset.subTab : ""));
  };

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
            <CatalogTabs>
              {tabs.map((tab) => {
                return (
                  <MenuTab key={tab.title} onClick={setTab} tabID={tab.tabID} currentTab={currentTab}>
                    {tab.title}
                  </MenuTab>
                );
              })}
            </CatalogTabs>
            <TransitionGroup className={"catalog-sub-tabs-wrapper"}>
              {subTabs.map((subTabBlock) => {
                const nodeRef = createRef<HTMLUListElement>();
                return currentTab === subTabBlock.subTabsID ? (
                  <CSSTransition
                    classNames={"catalog-sub-tabs"}
                    key={subTabBlock.subTabsID}
                    timeout={700}
                    nodeRef={nodeRef}>
                    <CatalogSubTabs ref={nodeRef}>
                      {subTabBlock.children?.map((tab) => {
                        return (
                          <MenuSubTab
                            currentTab={currentSubTab}
                            onClick={setSubTab}
                            key={tab.title}
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
            <TransitionGroup className={"catalog-links-wrapper"}>
              {links.map((linksBlock) => {
                const nodeRef = createRef<HTMLUListElement>();
                return currentSubTab === linksBlock.linksID ? (
                  <CSSTransition classNames={"catalog-links"} nodeRef={nodeRef} key={linksBlock.linksID} timeout={700}>
                    <CatalogLinks>
                      {linksBlock.children?.map((link) => {
                        return (
                          <CatalogLink to={link.to} key={link.title + link.to}>
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
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default Catalog;

import React, { createRef, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { setCurrentSubTab, setCurrentTab } from "../../redux/reducers/catalogSlice";
import MenuSubTab from "../UI/menuTabs/MenuSubTab";
import MenuTab from "../UI/menuTabs/MenuTab";
import CatalogSubTabs from "./CatalogSubTabs";
import CatalogTabs from "./CatalogTabs";

import CatalogLinks from "./CatalogLinks";
import CatalogLink from "./CatalogLink";
import "./Catalog.scss";

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
  const bodyRef = useRef<HTMLDivElement>(null);

  const setSubTabs = (e: React.MouseEvent<HTMLLIElement>) => {
    dispatch(
      setCurrentTab({
        id: e.currentTarget.dataset.tab ? e.currentTarget.dataset.tab : "",
        value: e.currentTarget.textContent ? e.currentTarget.textContent : "",
      })
    );
    dispatch(setCurrentSubTab({ id: "", value: "" }));
  };

  const setLinks = (e: React.MouseEvent<HTMLLIElement>) => {
    dispatch(
      setCurrentSubTab({
        id: e.currentTarget.dataset.subTab ? e.currentTarget.dataset.subTab : "",
        value: e.currentTarget.textContent ? e.currentTarget.textContent : "",
      })
    );
  };

  return (
    <CSSTransition
      onExited={() => {
        dispatch(setCurrentTab({ id: "", value: "" }));
        dispatch(setCurrentSubTab({ id: "", value: "" }));
      }}
      mountOnEnter
      unmountOnExit
      in={isCatalogVisible}
      classNames={"catalog"}
      nodeRef={catalogRef}
      timeout={700}>
      <div ref={catalogRef} className="catalog">
        <div className="catalog__container">
          <div ref={bodyRef} className="catalog-body">
            <CatalogTabs>
              {tabs.map((tab) => {
                return (
                  <MenuTab key={tab.title} onClick={setSubTabs} tabID={tab.tabID} currentTab={currentTab.id}>
                    {tab.title}
                  </MenuTab>
                );
              })}
            </CatalogTabs>
            <TransitionGroup className={"catalog-sub-tabs-wrapper"}>
              {subTabs.map((subTabBlock) => {
                const nodeRef = createRef<HTMLUListElement>();
                return currentTab.id === subTabBlock.subTabsID ? (
                  <CSSTransition
                    classNames={"catalog-sub-tabs"}
                    key={subTabBlock.subTabsID}
                    timeout={700}
                    nodeRef={nodeRef}>
                    <CatalogSubTabs ref={nodeRef}>
                      {subTabBlock.children?.map((tab) => {
                        return (
                          <MenuSubTab
                            currentTab={currentSubTab.id}
                            onClick={setLinks}
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
            <TransitionGroup
              style={{
                maxHeight: window.innerWidth > 1499 ? bodyRef.current?.scrollHeight : "600px",
              }}
              className={"catalog-links-wrapper"}>
              {links.map((linksBlock) => {
                const nodeRef = createRef<HTMLUListElement>();
                return currentSubTab.id === linksBlock.linksID ? (
                  <CSSTransition nodeRef={nodeRef} key={linksBlock.linksID} timeout={700} classNames={"catalog-links"}>
                    <CatalogLinks ref={nodeRef}>
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

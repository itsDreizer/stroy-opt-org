import React from "react";
import { DefaultProps } from "../../types";

import "./CatalogSubTabs.scss";

interface ICatalogSubTabs extends DefaultProps {
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const CatalogSubTabs = React.forwardRef<HTMLUListElement, ICatalogSubTabs>((props, ref) => {
  const { children } = props;

  return (
    <ul ref={ref} className="catalog-sub-tabs">
      {children}
    </ul>
  );
});

export default CatalogSubTabs;

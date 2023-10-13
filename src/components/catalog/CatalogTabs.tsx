import React from "react";
import { DefaultProps } from "../../types";

import "./CatalogTabs.scss";

interface ICatalogTabs extends DefaultProps {}

const CatalogTabs = React.forwardRef<HTMLUListElement, ICatalogTabs>((props, ref) => {
  const { children } = props;
  return (
    <ul ref={ref} className="catalog-tabs">
      {children}
    </ul>
  );
});

export default CatalogTabs;

import React from "react";
import { DefaultProps } from "../../types";

interface ICatalogTabs extends DefaultProps {}

const CatalogTabs = React.forwardRef<HTMLUListElement, ICatalogTabs>((props, ref) => {
  const { children, className } = props;
  return (
    <ul ref={ref} className={`catalog-tabs ${className ? className : ""}`}>
      {children}
    </ul>
  );
});

export default CatalogTabs;

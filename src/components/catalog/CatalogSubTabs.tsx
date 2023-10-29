import React from "react";
import { DefaultProps } from "../../types";

interface ICatalogSubTabs extends DefaultProps {
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const CatalogSubTabs = React.forwardRef<HTMLUListElement | null, ICatalogSubTabs>((props, ref) => {
  const { children, className } = props;

  return (
    <ul ref={ref} className={`catalog-sub-tabs ${className ? className : ""}`}>
      {children}
    </ul>
  );
});

export default CatalogSubTabs;

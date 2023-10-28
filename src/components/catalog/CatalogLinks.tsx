import React from "react";
import { DefaultProps } from "../../types";

interface ICatalogLinks extends DefaultProps {}

const CatalogLinks = React.forwardRef<HTMLUListElement, ICatalogLinks>((props, ref) => {
  const { children, className } = props;
  return (
    <ul ref={ref} className={`catalog-links ${className ? className : ""}`}>
      {children}
    </ul>
  );
});

export default CatalogLinks;

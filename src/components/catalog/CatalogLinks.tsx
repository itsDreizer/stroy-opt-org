import React from "react";
import { DefaultProps } from "../../types";

interface ICatalogLinks extends DefaultProps {}

const CatalogLinks = React.forwardRef<HTMLUListElement, ICatalogLinks>((props, ref) => {
  const {children} = props
  return <ul ref={ref} className="catalog-links">{children}</ul>;
});

export default CatalogLinks;

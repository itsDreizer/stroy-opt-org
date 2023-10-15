import React from "react";
import { DefaultProps } from "../../types";

interface ICatalogLinks extends DefaultProps {}

const CatalogLinks: React.FC<ICatalogLinks> = ({ children }) => {
  return <ul className="catalog-links">{children}</ul>;
};

export default CatalogLinks;

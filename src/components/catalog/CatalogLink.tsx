import React from "react";
import { DefaultProps } from "../../types";
import { Link } from "react-router-dom";

interface ICatalogLink extends DefaultProps {
  to: string;
}

const CatalogLink: React.FC<ICatalogLink> = ({ children, to }) => {
  return (
    <li className="catalog-links__item">
      <Link to={to} className="catalog-links__link">
        {children}
      </Link>
    </li>
  );
};

export default CatalogLink;

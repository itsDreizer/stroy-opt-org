import React from "react";
import { DefaultProps } from "../../../../types";
import NavigationButton from "../../buttons/NavigationButton";

import "./OthersCard.scss";

interface IOthersCardsProps extends DefaultProps {}

const OthersCard: React.FC<IOthersCardsProps> = (props) => {
  const { className, children } = props;

  const classList = {
    text: className ? `${className}__text` : "",
  };

  return (
    <div className={`others-card ${className ? className : ""}`}>
      <div className="others-card__block-button">
        <NavigationButton className="others-card__button" direction="right" />
      </div>
      <div className={`others-card__text ${classList.text}`}>{children}</div>
    </div>
  );
};

export default OthersCard;

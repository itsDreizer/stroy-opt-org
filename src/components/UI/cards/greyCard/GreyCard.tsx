import React from "react";
import { DefaultProps } from "../../../../types";

import "./GreyCard.scss";

interface IGreyCardProps extends DefaultProps {
  imgSource: string;
  imgAlt?: string;
}

const GreyCard: React.FC<IGreyCardProps> = (props) => {
  const { className, children, imgSource, imgAlt } = props;

  const classes = {
    blockImg: className ? `${className}__block-img` : "",
    img: className ? `${className}__img` : "",
    text: className ? `${className}__text` : "",
  };

  return (
    <div className={`grey-card ${className ? className : ""}`}>
      <div className={`grey-card__block-img ${classes.blockImg}`}>
        <img className={`grey-card__img ${classes.img}`} src={imgSource} alt={imgAlt} />
      </div>
      <div className={`grey-card__text ${classes.text}`}>{children}</div>
    </div>
  );
};

export default GreyCard;

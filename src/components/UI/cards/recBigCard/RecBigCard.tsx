import React from "react";
import { DefaultProps } from "../../../../types";

import "./RecBigCard.scss";

interface IRecBigCardProps extends DefaultProps {
  discount?: number;
  backgroundSrc: string;
  imageAlt?: string;
}

const RecBigCard: React.FC<IRecBigCardProps> = (props) => {
  const { className, children, discount, backgroundSrc, imageAlt } = props;

  const classList = {
    background: className ? `${className}__bg` : "",
    text: className ? `${className}__text` : "",
    discount: className ? `${className}__discount` : "",
  };

  return (
    <div className={`recommendations-big-card ${className ? className : ""}`}>
      <img className={`recommendations-big-card__bg ${classList.background}`} src={backgroundSrc} alt={imageAlt} />
      <div className={`recommendations-big-card__text ${classList.text}`}>{children}</div>
      {discount ? (
        <div className={`recommendations-big-card__discount ${classList.discount}`}>{`до -${discount}%`}</div>
      ) : (
        false
      )}
    </div>
  );
};

export default RecBigCard;

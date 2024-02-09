import React from "react";

import "./RecommendationsSection.scss";
import GreyCard from "../../UI/cards/greyCard/GreyCard";

import bathImg from "../../../images/recommendations/bath.png";
import switchesImg from "../../../images/recommendations/switches.png";
import drillImg from "../../../images/recommendations/drill.png";
import woodsImg from "../../../images/recommendations/woods.png";
import bricksImg from "../../../images/recommendations/bricks.png";
import furnaceImg from "../../../images/recommendations/furnace.png";
import OthersCard from "../../UI/cards/othersCard/OthersCard";

const RecommendationsSection: React.FC = () => {
  return (
    <section className="recommendations">
      <div className="recommendations__container">
        <div className="recommendations-small-cards">
          <GreyCard imgSource={bathImg} className="recommendations-small-card">
            Сантехника
          </GreyCard>
          <GreyCard imgSource={switchesImg} className="recommendations-small-card">
            Электротовары
          </GreyCard>
          <GreyCard imgSource={drillImg} className="recommendations-small-card">
            Инструменты
          </GreyCard>
          <GreyCard imgSource={woodsImg} className="recommendations-small-card">
            Столярные изделия
          </GreyCard>
          <GreyCard imgSource={bricksImg} className="recommendations-small-card">
            Общестроительные материалы
          </GreyCard>
          <GreyCard imgSource={bathImg} className="recommendations-small-card">
            Сантехника
          </GreyCard>
          <GreyCard imgSource={switchesImg} className="recommendations-small-card">
            Электротовары
          </GreyCard>
          <OthersCard className="recommendations-small-card">Перейти в каталог </OthersCard>
        </div>
        <div className="recommendations-big-cards">
          
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;

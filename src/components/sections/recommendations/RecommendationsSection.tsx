import React from "react";

import "./RecommendationsSection.scss";
import GreyCard from "../../UI/cards/greyCard/GreyCard";

import bathImg from "../../../images/recommendations/bath.png";
import switchesImg from "../../../images/recommendations/switches.png";
import drillImg from "../../../images/recommendations/drill.png";
import woodsImg from "../../../images/recommendations/woods.png";
import bricksImg from "../../../images/recommendations/bricks.png";
import methisImg from "../../../images/recommendations/Methis.png";
import floorImg from "../../../images/recommendations/floorСoverings.png";
import heatingImg from "../../../images/recommendations/heating.png";
import paintsImg from "../../../images/recommendations/paints&varnishes.png";

import OthersCard from "../../UI/cards/othersCard/OthersCard";
import RecBigCard from "../../UI/cards/recBigCard/RecBigCard";
import { useAppSelector } from "../../../redux/hooks";

const RecommendationsSection: React.FC = () => {
  const windowWidth = useAppSelector((state) => {
    return state.states.windowWidth;
  });

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
          <RecBigCard backgroundSrc={methisImg} discount={15}>
            Метизные изделия
          </RecBigCard>
          <RecBigCard backgroundSrc={paintsImg} discount={15}>
            Лакокрасочные материалы
          </RecBigCard>
          <RecBigCard backgroundSrc={floorImg} discount={15}>
            Напольные покрытия
          </RecBigCard>
          {
            <RecBigCard backgroundSrc={heatingImg} discount={15}>
              Все для отопления
            </RecBigCard>
          }
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;

import React from "react";
import { DefaultProps } from "../../../types";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "./IntroSection.scss";

interface IIntroSliderProps extends DefaultProps {}

const IntroSection: React.FC<IIntroSliderProps> = (props) => {
  return (
    <section className="intro">
      <div className="intro__container">
        <Swiper className="intro__swiper">
          <SwiperSlide className="intro__slide">
            <div className="intro__block-text">
              <h1 className="intro__title">Электроинструмент для любых нужд</h1>
              <p className="intro__description">
                У нас обновился ассортимент сантехники, мебели для ванной комнаты, а так же других сопутствующих
                товаров.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default IntroSection;

import React, { useRef } from "react";
import { DefaultProps } from "../../../types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SliderImg1 from "../../../images/intro/1.png";
import SliderImg2 from "../../../images/intro/2.png";
import bankCardIcon from "../../../images/icons/bankCard.svg";
import goodsIcon from "../../../images/icons/goodsInCatlaog.svg";
import packageIcon from "../../../images/icons/package.svg";
import salesIcon from "../../../images/icons/sales.svg";

import "./IntroSection.scss";
import Button from "../../UI/buttons/Button";
import NavigationButton from "../../UI/buttons/NavigationButton";
import CustomSwiperPagination from "../../UI/pagination/CustomSwiperPagination";
import { useAppSelector } from "../../../redux/hooks";

interface IIntroSectionProps extends DefaultProps {}

const IntroSection: React.FC<IIntroSectionProps> = (props) => {
  const { windowWidth } = useAppSelector((state) => {
    return state.states;
  });
  return (
    <section className="intro">
      <div className="intro__container">
        <Swiper
          spaceBetween={windowWidth > 1100 ? 100 : 50}
          loop={true}
          autoplay={{ delay: 3500 }}
          navigation={{
            prevEl: ".intro-swiper__nav-btn-prev",
            nextEl: ".intro-swiper__nav-btn-next",
          }}
          pagination={{
            el: ".intro-swiper__pagination",
            type: "bullets",
            clickable: true,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          speed={1300}
          className="intro-swiper">
          <SwiperSlide className="intro__slide">
            <div className="intro__block-bg-img">
              <img className="intro__bg-img" src={SliderImg1} alt="" />
            </div>
            <div className="intro__block-text">
              <h1 className="intro__title">Электроинструмент для любых нужд</h1>
              <p className="intro__description">
                У нас обновился ассортимент сантехники, мебели для ванной комнаты, а так же других сопутствующих
                товаров.
              </p>
              <Button color="black" href="" isLink={true} className="intro__button">
                перейти к товарам
              </Button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="intro__slide">
            <div className="intro__block-bg-img">
              <img className="intro__bg-img" src={SliderImg2} alt="" />
            </div>
            <div className="intro__block-text">
              <h1 className="intro__title">Электроинструмент для любых нужд</h1>
              <p className="intro__description">
                У нас обновился ассортимент сантехники, мебели для ванной комнаты, а так же других сопутствующих
                товаров.
              </p>
              <Button color="black" href="" isLink={true} className="intro__button">
                перейти к товарам
              </Button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="intro__slide">
            <div className="intro__block-bg-img">
              <img className="intro__bg-img" src={SliderImg1} alt="" />
            </div>
            <div className="intro__block-text">
              <h1 className="intro__title">Электроинструмент для любых нужд</h1>
              <p className="intro__description">
                У нас обновился ассортимент сантехники, мебели для ванной комнаты, а так же других сопутствующих
                товаров.
              </p>
              <Button color="black" href="" isLink={true} className="intro__button">
                перейти к товарам
              </Button>
            </div>
          </SwiperSlide>
          <SwiperSlide className="intro__slide">
            <div className="intro__block-bg-img">
              <img className="intro__bg-img" src={SliderImg2} alt="" />
            </div>
            <div className="intro__block-text">
              <h1 className="intro__title">Электроинструмент для любых нужд</h1>
              <p className="intro__description">
                У нас обновился ассортимент сантехники, мебели для ванной комнаты, а так же других сопутствующих
                товаров.
              </p>
              <Button color="black" href="" isLink={true} className="intro__button">
                перейти к товарам
              </Button>
            </div>
          </SwiperSlide>
          <div className="intro-swiper__controlls">
            {windowWidth > 1100 ? (
              <NavigationButton className="intro-swiper__nav-btn intro-swiper__nav-btn-prev" direction="left" />
            ) : (
              false
            )}
            {windowWidth > 1100 ? (
              <NavigationButton className="intro-swiper__nav-btn intro-swiper__nav-btn-next" direction="right" />
            ) : (
              false
            )}
            <CustomSwiperPagination className="intro-swiper__pagination" />
          </div>
        </Swiper>
        <div className="intro-benefits">
          <div className="intro-benefits__item">
            <div className="intro-benefits__block-img">
              <img className="intro-benefits__img" src={bankCardIcon} alt="" />
            </div>
            <div className="intro-benefits__block-text">Оплата любым удобным способом</div>
          </div>
          <div className="intro-benefits__item">
            <div className="intro-benefits__block-img">
              <img className="intro-benefits__img" src={goodsIcon} alt="" />
            </div>
            <div className="intro-benefits__block-text">Оплата любым удобным способом</div>
          </div>
          <div className="intro-benefits__item">
            <div className="intro-benefits__block-img">
              <img className="intro-benefits__img" src={packageIcon} alt="" />
            </div>
            <div className="intro-benefits__block-text">Оплата любым удобным способом</div>
          </div>
          <div className="intro-benefits__item">
            <div className="intro-benefits__block-img">
              <img className="intro-benefits__img" src={salesIcon} alt="" />
            </div>
            <div className="intro-benefits__block-text">Оплата любым удобным способом</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;

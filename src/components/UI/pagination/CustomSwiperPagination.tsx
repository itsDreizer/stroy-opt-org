import React from "react";
import { DefaultProps } from "../../../types";

import "./CustomSwiperPagination.scss";

interface ICustomSwiperPaginationProps extends DefaultProps {}

const CustomSwiperPagination: React.FC<ICustomSwiperPaginationProps> = ({ className }) => {
  return <div className={`swiper-pagination custom-swiper-pagination ${className ? className : ""}`}></div>;
};

export default CustomSwiperPagination;

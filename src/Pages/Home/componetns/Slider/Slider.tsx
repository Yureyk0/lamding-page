import { SwiperSlide, Swiper } from "swiper/react";

import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

import { Slide } from "./components/Slide/Slide";

export const Slider = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (_index: number, className: string) {
      return '<span class="' + className + '">' + "</span>";
    },
  };
  return (
    <div className="swiper">
      <Swiper
        pagination={pagination}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
        <SwiperSlide>
          <Slide />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

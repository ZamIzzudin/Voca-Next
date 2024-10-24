/** @format */

import { Box } from "@radix-ui/themes";
import Container from "./Container";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export function BannerSlider() {
  const data = [1, 2, 3, 4];

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '"></span>';
    },
  };

  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={30}
      loop={true}
      autoplay={{ delay: 2000 }}
      centeredSlides={true}
      pagination={pagination}
      modules={[Pagination, Autoplay]}
      className="calc(100vw - (100vw - 100%))"
    >
      {data.map((item) => (
        <SwiperSlide style={{ width: "calc(100vw - 15rem)" }}>
          <Box className="bg-gray-500 rounded-xl" height="400px">
            Slide {item}
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

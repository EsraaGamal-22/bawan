import { useLayoutEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper as SwiperClass } from "swiper/types";
import SwiperCore from "swiper";
import { FreeMode, Navigation, Thumbs, Controller } from "swiper/modules";
import { baseURL } from "../../api/axiox-util";
type SliderImages = {
  projectImages: string[];
};
export const SliderThumbs = ({ projectImages }: SliderImages) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();
  // const [firstSwiper, setFirstSwiper] = useState<SwiperClass>();
  // const [secondSwiper, setSecondSwiper] = useState<SwiperClass>();
  const swiper1Ref = useRef<SwiperClass>(null);
  const swiper2Ref = useRef();

  useLayoutEffect(() => {
    if (swiper1Ref.current !== null) {
      swiper1Ref.current.controller.control = swiper2Ref.current;
    }
  }, []);

  return (
    <div>
      <Swiper
        // onSwiper={(swiper) => {
        //   if (swiper1Ref.current !== null) {
        //     swiper1Ref.current = swiper;
        //   }
        // }}
        // controller={{ control: secondSwiper }}
        spaceBetween={10}
        slidesPerView={1}
        grabCursor={true}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs, Controller]}
        className="rounded-xl mb-3.2 w-full"
      >
        {projectImages.map((img, indx) => {
          return (
            <>
              <SwiperSlide key={indx} className="w-full h-[79rem]">
                <img className="w-full" src={baseURL + img} alt="slide-img" />
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
      <Swiper
        // controller={{ control: firstSwiper }}
        loop={false}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          320: {
            slidesPerView: 4,
          },

          499: {
            slidesPerView: 5,
          },
          999: {
            slidesPerView: 7,
          },
          1200: {
            slidesPerView: 8,
          },
        }}
        watchSlidesProgress
        touchRatio={0.2}
        slideToClickedSlide={true}
        onSwiper={setThumbsSwiper}
        modules={[Navigation, Thumbs, Controller]}
        className=" rounded-xl"
      >
        {projectImages.map((img, indx) => {
          return (
            <>
              <SwiperSlide className="w-[20%]" key={indx}>
                <img
                  src={baseURL + img}
                  className="h-[7rem] rounded-xl"
                  alt="slide-img"
                />
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </div>
  );
};

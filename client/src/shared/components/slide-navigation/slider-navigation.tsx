// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
// import required modules

import { Autoplay, EffectCreative, Navigation } from "swiper/modules";
import { sliderInfo } from "./slider-navigation-contants";
import { MenuStatus } from "../navbar/nabar.module";

export const SliderNavigation = ({ isMenuShown }: MenuStatus) => {
  sliderInfo;
  return (
    <>
      {/**navigation */}
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        dir="rtl"
        navigation={!isMenuShown ? false : true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[Autoplay, Navigation, EffectCreative]}
        className="mySwiper w-full h-dvh mb-[12.0rem]"
      >
        {sliderInfo.map((slide, idx) => {
          return (
            <>
              <SwiperSlide
                key={idx}
                className="relative d-flex align-middle justify-self-center text-center after:w-full after:h-full after:block after:absolute after:top-0 after:z-[1] after:bg-black/55"
              >
                <img
                  className="w-full h-full object-cover"
                  src={slide.img}
                  alt="img-slider"
                />
                <div
                  className={`absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] z-[2] ${
                    !isMenuShown && "hidden"
                  }`}
                >
                  <h1 className="text-white font-bold text-2 md:text-3 lg:text-4.8 leading-[8rem]">
                    {slide.title}
                  </h1>
                  <p className="text-white text-opacity-60 font-normal text-1.5 md:text-2 lg:text-3.2 leading-[2.8rem] mt-0.5 lg:mt-3.2">
                    {slide.paragraph}
                  </p>
                </div>
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
};

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
// import required modules

import { Autoplay, EffectCreative, Navigation } from "swiper/modules";
import { sliderInfo } from "./slider-navigation-contants";
import { Navbar } from "../navbar/navbar";
import { pageActive } from "../navbar/nabar.module";

export const SliderNavigation = ({ pageName }: pageActive) => {
  sliderInfo;
  return (
    <>
      {/* <Navbar /> */}
      {/**navigation */}
      <Swiper
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        dir="rtl"
        navigation={true}
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
                <div className="lg:w-[51.9rem] absolute right-[4rem] bottom-[16rem] lg:right-[19.1rem] lg:bottom-[20rem] z-[2]">
                  <h1 className="text-white font-bold text-3 lg:text-4.8 leading-[8rem]">
                    {slide.title}
                  </h1>
                  <p className="text-white text-opacity-60 font-normal text-2 lg:text-3.2 leading-[2.8rem] mt-0.5 lg:mt-3.2">
                    {slide.paragraph}
                  </p>
                </div>
                <Navbar pageName="الرئيسية" />
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
};

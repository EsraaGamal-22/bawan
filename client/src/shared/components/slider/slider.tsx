// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
// import required modules
import { Autoplay, EffectCreative, Navigation } from "swiper/modules";
import { Outlet } from "react-router-dom";
import { Navbar } from "../navbar/navbar";

export const Slider = () => {
  return (
    <>
      {/* <Navbar /> */}
      {/**navigation */}
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
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
        className="mySwiper w-full h-dvh"
      >
        <SwiperSlide className="relative d-flex align-middle justify-self-center text-center">
          <img
            className="relative w-full h-full object-cover"
            src="/public/assets/slide1.png"
            alt="img-slider"
          />
          <div className="lg:w-[51.9rem] absolute top-[42.7rem] right-9 lg:right-[18.1rem] lg:bottom[28.9rem] mx-auto">
            <h1 className=" h-[8rem] text-primary-500 font-bold text-3 sm:text-5 md-text-[4rem] lg:text-[8rem] leading-[8rem]">
              مجتمع عمراني
            </h1>
            <p className="h-[2.8rem] text-primary-500 text-opacity-50 font-normal text-2 sm:text-3 lg:text-4 leading-[2.8rem] mt-0.5 lg:mt-3.2">
              متكامل في فضاء التميز والابداع
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="relative d-flex align-middle justify-self-center text-center">
          <img
            className="relative w-full h-full object-cover"
            src="/public/assets/slide1.png"
            alt="img-slider"
          />
          <div className="lg:w-[51.9rem] absolute top-[42.7rem] right-9 lg:right-[18.1rem] lg:bottom[28.9rem] mx-auto">
            <h1 className=" h-[8rem] text-primary-500 font-bold text-3 sm:text-5 md-text-[4rem] lg:text-[8rem] leading-[8rem]">
              مجتمع عمراني
            </h1>
            <p className="h-[2.8rem] text-primary-500 text-opacity-50 font-normal text-2 sm:text-3 lg:text-4 leading-[2.8rem] mt-0.5 lg:mt-3.2">
              متكامل في فضاء التميز والابداع
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative d-flex align-middle justify-self-center text-center">
          <img
            className="relative w-full h-full object-cover"
            src="/public/assets/slide3.png"
            alt="img-slider"
          />
          <div className="lg:w-[51.9rem] absolute top-[42.7rem] right-9 lg:right-[18.1rem] lg:bottom[28.9rem] mx-auto">
            <h1 className=" h-[8rem] text-primary-500 font-bold text-3 sm:text-5 md-text-[4rem] lg:text-[8rem] leading-[8rem]">
              مجتمع عمراني
            </h1>
            <p className="h-[2.8rem] text-primary-500 text-opacity-50 font-normal text-2 sm:text-3 lg:text-4 leading-[2.8rem] mt-0.5 lg:mt-3.2">
              متكامل في فضاء التميز والابداع
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      <Outlet />
    </>
  );
};

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { sliderData } from "./sliders-pagination-data";

export const SliderPagination = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={5}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },

          499: {
            slidesPerView: 2,
          },
          999: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
        dir="rtl"
        modules={[Pagination, Autoplay]}
        className="mySwiper2 "
      >
        {sliderData.map((slide, idx) => {
          return (
            <>
              {" "}
              <SwiperSlide key={idx} className="mb-4 mt-5">
                <div className="flex flex-col justify-center items-center">
                  <div className="w-5.5 h-[7.0rem]">
                    <img src={slide.image} alt="img-slide" />
                  </div>
                  <p className="w-max text-2.4 font-normal text-primary-900">
                    {slide.title}
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

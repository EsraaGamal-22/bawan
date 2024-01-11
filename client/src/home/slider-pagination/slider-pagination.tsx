import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import { StrapiError } from "../../api/models/strapi-error";
import { StrapiWrapper } from "../../api/models/strapi-wrapper";

import { AxiosResponse } from "axios";
import { baseURL, request } from "../../api/axiox-util";
import { PartnerData } from "../models/partner.model";
import { Loading } from "../../shared/components/loading/loading";
import { EmptyData } from "../../shared/components/empty-data/empty-data";
import { ErrorMessage } from "../../shared/components/error-message/error-message";

export const SliderPagination = () => {
  const {
    data: partnerData,
    error,
    isLoading,
  } = useQuery<AxiosResponse<StrapiWrapper<PartnerData[]>, any>, StrapiError>({
    queryKey: ["partner"],
    queryFn: () =>
      request.get<StrapiWrapper<PartnerData[]>>("/api/partners?populate=logo"),
  });
  return (
    <>
      {isLoading && <Loading />}
      {error && <ErrorMessage />}
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
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
        className="mySwiper2"
      >
        {partnerData && partnerData.data.data.length === 0 && <EmptyData />}
        {partnerData &&
          partnerData.data.data.length > 0 &&
          partnerData.data.data.map((partner) => {
            return (
              <>
                <SwiperSlide key={partner.id} className="mb-4 mt-2 lg:mt-5">
                  <div className="flex flex-col justify-center items-center">
                    <div className="w-max-5.5">
                      <img
                        src={
                          baseURL + partner.attributes.logo.data.attributes.url
                        }
                        alt="img-slide"
                      />
                    </div>
                    <p className="text-1.4 lg:text-2.4 font-normal text-primary-900 leading-[6rem]">
                      {partner.attributes.name}
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

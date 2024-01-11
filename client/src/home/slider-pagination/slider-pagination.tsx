import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

// import required modules
import { Autoplay, Pagination } from "swiper/modules"
import { useQuery } from "@tanstack/react-query"
import { StrapiError } from "../../api/models/strapi-error"
import { StrapiWrapper } from "../../api/models/strapi-wrapper"

import { AxiosResponse } from "axios"
import { baseURL, request } from "../../api/axiox-util"
import { PartnerData } from "../models/partner.model"
import { Loading } from "../../shared/components/loading/loading"
import { EmptyData } from "../../shared/components/empty-data/empty-data"
import { ErrorMessage } from "../../shared/components/error-message/error-message"

export const SliderPagination = () => {
  const {
    data: partnerData,
    error,
    isLoading,
  } = useQuery<AxiosResponse<StrapiWrapper<PartnerData[]>, any>, StrapiError>({
    queryKey: ["partner"],
    queryFn: () =>
      request.get<StrapiWrapper<PartnerData[]>>("/api/partners?populate=logo"),
  })
  return (
    <>
      {isLoading && <Loading />}
      {error && <ErrorMessage />}
      <Swiper
        style={{ display: "flex", alignItems: "center" }}
        spaceBetween={15}
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={false}
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
        className="partners-swiper"
      >
        {partnerData && partnerData.data.data.length === 0 && <EmptyData />}
        {partnerData &&
          partnerData.data.data.length > 0 &&
          partnerData.data.data.map((partner) => {
            return (
              <SwiperSlide key={partner.id} className="mb-4 mt-2 lg:mt-5">
                <img
                  src={baseURL + partner.attributes.logo.data.attributes.url}
                  alt="img-slide"
                />
              </SwiperSlide>
            )
          })}
      </Swiper>
    </>
  )
}

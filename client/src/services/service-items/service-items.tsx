import { AxiosResponse } from "axios";
import { StrapiError } from "../../api/models/strapi-error";
import { StrapiWrapper } from "../../api/models/strapi-wrapper";
import { ServiceData } from "../models/service-data.model";
import { useQuery } from "@tanstack/react-query";
import { baseURL, request } from "../../api/axiox-util";
import { Loading } from "../../shared/components/loading/loading";
import { ErrorMessage } from "../../shared/components/error-message/error-message";
import { EmptyData } from "../../shared/components/empty-data/empty-data";

export const ServiceItems = () => {
  const {
    data: serviceData,
    error,
    isLoading,
  } = useQuery<AxiosResponse<StrapiWrapper<ServiceData[]>, any>, StrapiError>({
    queryKey: ["partner"],
    queryFn: () =>
      request.get<StrapiWrapper<ServiceData[]>>("/api/services?populate=icon"),
  });
  return (
    <>
      {isLoading && <Loading />}
      {error && <ErrorMessage />}
      {serviceData && serviceData.data.data.length === 0 && <EmptyData />}
      <div className="lg:grid grid-cols-3 gap-[6.5rem] block ">
        {serviceData &&
          serviceData.data.data.length > 0 &&
          serviceData.data.data.map((service, idx) => {
            return (
              <>
                <div
                  key={idx}
                  className="bg-primary-900 text-white mx-auto text-center p-4 rounded-3 w-[90%] sm:w-[50%] lg:w-full mb-2 lg:mb-0"
                >
                  <div className="bg-white w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] rounded-full flex justify-center items-center mx-auto mb-3.2">
                    <img
                      className="w-[70%] rounded-full block"
                      src={
                        baseURL + service.attributes.icon.data.attributes.url
                      }
                      alt="icon-img"
                    />
                  </div>
                  <h2 className="text-1.4 lg:text-2.4 font-bold leading-4.4">
                    {service.attributes.title}
                  </h2>
                  <p className="text-1.4 opacity-80 leading-2.2 font-normal">
                    {service.attributes.description}
                  </p>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

import { Helmet } from "react-helmet-async"
import { Navbar } from "../../shared/components/navbar/navbar"
import { IntroSection } from "../../shared/components/intro-section/intro-section"
import {
  detailsProjectPage,
  projectFeatures,
} from "./details-project-constants"
import { Footer } from "../../shared/components/footer/footer"
import { SliderThumbs } from "../slider-thumbs/slider-thumbs"
import { SectionInfo } from "../../shared/components/section-info/section-info"
import { AxiosResponse } from "axios"
import { StrapiError } from "../../api/models/strapi-error"
import { request } from "../../api/axiox-util"
import { StrapiWrapper } from "../../api/models/strapi-wrapper"
import { useQuery } from "@tanstack/react-query"
import { Loading } from "../../shared/components/loading/loading"
import { ErrorMessage } from "../../shared/components/error-message/error-message"
import { EmptyData } from "../../shared/components/empty-data/empty-data"
import { ProjectDetailsProps } from "../models/project-data.model"
import { useParams } from "react-router-dom"

export const DetailsProject = () => {
  const { projectId } = useParams()
  const {
    data: projectData,
    error,
    isLoading,
  } = useQuery<
    AxiosResponse<StrapiWrapper<ProjectDetailsProps>, any>,
    StrapiError
  >({
    queryKey: ["projects", projectId],
    queryFn: () =>
      request.get<StrapiWrapper<ProjectDetailsProps>>(
        `/api/projects/${projectId}`,
        {
          params: {
            populate: "images",
          },
        }
      ),
  })
  return (
    <>
      <Helmet>
        <title>مشاريعنا</title>
        <meta name="description" content="خدمات بوان الرحاب العقارية " />
      </Helmet>
      {/*HEADER */}
      <Navbar />
      <IntroSection
        title={detailsProjectPage.title}
        txt={detailsProjectPage.txt}
        imgSection={detailsProjectPage.imgSection}
      />
      {/** project details*/}
      {isLoading && <Loading />}
      {error && <ErrorMessage />}
      {projectData && projectData.data.data === null && <EmptyData />}
      {projectData && projectData.data.data !== null && (
        <div className="w-[95%] max-w-[112.8rem] mb-[12rem] mx-auto ">
          <div className="text-center lg:text-start m-auto mb-4">
            <SectionInfo
              title={projectData.data.data.attributes.title}
              txt="خبرات تعكس جودة الاعمال لتلبي أفضل جودة لمشاريعنا"
            />

            <SliderThumbs
              projectImages={projectData.data.data.attributes.images.data}
            />
          </div>
          {projectData.data.data.attributes.description && (
            <>
              <h1 className="text-3.2 font-normal text-black leading-[5.9rem]">
                الوصف
              </h1>
              <p className=" lg:mb-5.2 text-1.4 lg:text-2.4 text-primary-900 opacity-80 leading-.5 font-normal">
                {projectData.data.data.attributes.description}
              </p>
            </>
          )}
        </div>
      )}

      {/*footer */}
      <Footer />
    </>
  )
}

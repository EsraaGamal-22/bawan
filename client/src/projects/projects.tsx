import { Helmet } from "react-helmet-async";
import { Navbar } from "../shared/components/navbar/navbar";
import { IntroSection } from "../shared/components/intro-section/intro-section";
import { projectsPage } from "./projects.constants";
import { Footer } from "../shared/components/footer/footer";
import { SectionInfo } from "../shared/components/section-info/section-info";
import { projectsInfo } from "../home/home.constants";
import { baseURL, request } from "../api/axiox-util";
import { AxiosResponse } from "axios";
import { StrapiWrapper } from "../api/models/strapi-wrapper";
import { useQuery } from "@tanstack/react-query";
import { Project } from "./models/project-data.model";
import { StrapiError } from "../api/models/strapi-error";
import { Loading } from "../shared/components/loading/loading";
import { ErrorMessage } from "../shared/components/error-message/error-message";
import Masonry from "react-layout-masonry";
import { ProjectInfo } from "../home/project-info/project-info";
import { useState } from "react";
import { useParams } from "react-router-dom";
export const Projects = () => {
  const [pageNumber, setPageNumber] = useState(1);

  // const {
  //   data: projectData,
  //   error,
  //   isLoading,
  // } = useQuery<AxiosResponse<StrapiWrapper<Project[]>, any>, StrapiError>({
  //   queryKey: ["projects"],
  //   queryFn: () =>
  //     request.get<StrapiWrapper<Project[]>>(
  //       "/api/projects/?populate=thumbnail,images&pagination[page]=1&pagination[pageSize]=2"
  //     ),
  // });
  const {
    data: projectData,
    error,
    isLoading,
  } = useQuery<AxiosResponse<StrapiWrapper<Project[]>, any>, StrapiError>({
    queryKey: ["projects", pageNumber],
    queryFn: () =>
      request.get<StrapiWrapper<Project[]>>("/api/projects", {
        params: {
          populate: "thumbnail,images",
          "pagination[page]": pageNumber,
          "pagination[pageSize]": 4,
        },
      }),
  });

  return (
    <>
      <Helmet>
        <title>مشاريعنا</title>
        <meta name="description" content="خدمات بوان الرحاب العقارية " />
      </Helmet>
      {/**HEADER */}
      <Navbar pageName="مشاريعنا" />
      <IntroSection
        title={projectsPage.title}
        txt={projectsPage.txt}
        imgSection={projectsPage.imgSection}
      />
      {/** projects items */}
      <div className="w-[95%] max-w-[112.8rem] mb-[12rem] mx-auto ">
        <div className="text-center lg:text-start m-auto mb-4">
          <SectionInfo title={projectsInfo.title} txt={projectsInfo.txt} />
        </div>
        {isLoading && <Loading />}
        {error && <ErrorMessage />}
        <div className="relative ">
          {/* <a href="/detailsProject" className="text-1.4">
            more
          </a> */}
          {projectData?.data.data.map((item, indx) => {
            return (
              <>
                <Masonry
                  columns={{ 640: 1, 768: 2, 1024: 3, 1280: 3 }}
                  gap={16}
                >
                  <ProjectInfo
                    key={crypto.randomUUID()}
                    paragraph={item.attributes.title}
                    imgSrc={
                      baseURL +
                      item.attributes.thumbnail.data.attributes.formats
                        .thumbnail.url
                    }
                  />
                </Masonry>
              </>
            );
          })}

          {/* paginator */}
          <div className="w-[10%] mx-auto flex justify-between items-center">
            {projectData?.data.meta.pagination && (
              <>
                {Array.from({
                  length: projectData?.data.meta.pagination.pageCount,
                }).map((value, indx) => {
                  const currentPage = indx + 1;
                  return (
                    <>
                      <span
                        className="cursor-pointer"
                        onClick={() => setPageNumber(currentPage)}
                      >
                        {currentPage}
                      </span>
                    </>
                  );
                })}
              </>
            )}
          </div>

          <div>
            <img
              className="absolute right-0 z-[-1]"
              src="/assets/backProjects.png"
              alt="back-img"
            />
          </div>
        </div>
      </div>
      {/**footer */}
      <Footer />
    </>
  );
};

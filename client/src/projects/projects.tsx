import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Masonry from "react-layout-masonry";
import { request } from "../api/axiox-util";
import { StrapiError } from "../api/models/strapi-error";
import { StrapiWrapper } from "../api/models/strapi-wrapper";
import { projectsInfo } from "../home/home.constants";
import { EmptyData } from "../shared/components/empty-data/empty-data";
import { ErrorMessage } from "../shared/components/error-message/error-message";
import { Footer } from "../shared/components/footer/footer";
import { IntroSection } from "../shared/components/intro-section/intro-section";
import { Loading } from "../shared/components/loading/loading";
import { Navbar } from "../shared/components/navbar/navbar";
import { SectionInfo } from "../shared/components/section-info/section-info";
import { ProjectDetailsProps } from "./models/project-data.model";
import { ProjectInfo } from "./project-info/project-info";
import { projectsPage } from "./projects.constants";

export const Projects = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const {
    data: projectData,
    error,
    isLoading,
  } = useQuery<
    AxiosResponse<StrapiWrapper<ProjectDetailsProps[]>, any>,
    StrapiError
  >({
    queryKey: ["project-pages", pageNumber],
    queryFn: () =>
      request.get<StrapiWrapper<ProjectDetailsProps[]>>("/api/projects", {
        params: {
          populate: "thumbnail",
          "pagination[page]": pageNumber,
          "pagination[pageSize]": 5,
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
      <Navbar />
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
        {projectData && projectData.data.data.length === 0 && <EmptyData />}

        <Masonry
          className="mb-[12rem]"
          columns={{ 640: 1, 768: 2, 1024: 3, 1280: 3 }}
          gap={16}
        >
          {projectData &&
            projectData.data.data.length > 0 &&
            projectData.data.data.map((project) => {
              return (
                  <ProjectInfo
                    key={project.id}
                    id={project.id}
                    title={project.attributes.title}
                    imgUrl={
                      project.attributes.thumbnail.data.attributes.formats
                        .thumbnail.url
                    }
                  />
              );
            })}
        </Masonry>
        {/* paginator */}
        <div className="w-fit mx-auto flex justify-between items-center">
          <div
            className={`cursor-pointer ml-1 w-4 h-4 lg:w-[5.2rem] lg:h-[5.2rem] text-2 lg:text-2.6 border font-medium rounded-full  flex justify-center items-center ml-.3 ${
              pageNumber === 1
                ? "text-gray-800 border-gray-700 !cursor-not-allowed"
                : "text-primary-900 border-secondary-700"
            }`}
            onClick={() => pageNumber !== 1 && setPageNumber(pageNumber - 1)}
          >
            &#x21fe;
          </div>
          {projectData?.data.meta.pagination && (
            <>
              {Array.from({
                length: projectData?.data.meta.pagination.pageCount,
              }).map((_, indx) => {
                const currentPage = indx + 1;
                
                return (
                    <span
                      key={crypto.randomUUID()}
                      className={`cursor-pointer ml-1 w-4 h-4 lg:w-[5.2rem] lg:h-[5.2rem] font-medium text-1.4 lg:text-1.6  text-primary-900 rounded-full border border-secondary-700 flex justify-center items-center ml-.3 ${pageNumber === currentPage? '!bg-primary-800 text-white' : ''}`}
                      onClick={() => setPageNumber(currentPage)}
                    >
                      {currentPage}
                    </span>
                );
              })}
            </>
          )}
          <div
            onClick={() =>
              pageNumber !== projectData?.data.meta.pagination.pageCount &&
              setPageNumber(pageNumber + 1)
            }
            className={`cursor-pointer ml-1 w-4 h-4 lg:w-[5.2rem] lg:h-[5.2rem] text-2 lg:text-2.6 font-medium rounded-full border flex justify-center items-center ml-.3 ${
              pageNumber === projectData?.data.meta.pagination.pageCount
                ? "text-gray-800 border-gray-700 !cursor-not-allowed"
                : "text-primary-900 border-secondary-700"
            }`}
          >
            &#x21fd;
          </div>
        </div>

        <div>
          <img
            className="absolute right-0 z-[-1] bottom-0 "
            src="/assets/backProjects.png"
            alt="back-img"
          />
        </div>
      </div>

      {/**footer */}
      <Footer />
    </>
  );
};

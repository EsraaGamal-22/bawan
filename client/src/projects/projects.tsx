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
import { ProjectData } from "./models/project-data.model";
import { StrapiError } from "../api/models/strapi-error";
import { Loading } from "../shared/components/loading/loading";
import { ErrorMessage } from "../shared/components/error-message/error-message";
import Masonry from "react-layout-masonry";
import { ProjectInfo } from "../home/project-info/project-info";
export const Projects = () => {
  const {
    data: projectData,
    error,
    isLoading,
  } = useQuery<AxiosResponse<StrapiWrapper<ProjectData[]>, any>, StrapiError>({
    queryKey: ["projects"],
    queryFn: () =>
      request.get<StrapiWrapper<ProjectData[]>>(
        "/api/projects?populate=thumbnail,images"
      ),
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
                  {projectData?.data.data.map((item, indx) => {
                    return (
                      <ProjectInfo
                        key={indx}
                        paragraph={item.attributes.title}
                        imgSrc={
                          baseURL +
                          item.attributes.thumbnail.data.attributes.formats
                            .thumbnail.url
                        }
                      />
                    );
                  })}
                </Masonry>
              </>
            );
          })}

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

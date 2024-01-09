import { Helmet } from "react-helmet-async";
import { Navbar } from "../shared/components/navbar/navbar";
import { IntroSection } from "../shared/components/intro-section/intro-section";
import { projectsPage } from "./projects.constants";
import { Footer } from "../shared/components/footer/footer";
import { SectionInfo } from "../shared/components/section-info/section-info";
import { projectsInfo } from "../home/home.constants";

export const Projects = () => {
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
        <div className="relative ">
          <a href="/detailsProject" className="text-1.4">
            more
          </a>
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

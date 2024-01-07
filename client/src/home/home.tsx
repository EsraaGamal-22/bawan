import { Helmet } from "react-helmet-async";
import { MoreBtn } from "../shared/components/more-btn/more-btn";
import { SectionInfo } from "../shared/components/section-info/section-info";
import {
  aboutInfo,
  projectContent,
  projectsInfo,
  servicesInfo,
  successPartner,
} from "./home.constants";
import { SliderNavigation } from "../shared/components/slide-navigation/slider-navigation";
import { SliderPagination } from "./slider-pagination/slider-pagination";
import { Footer } from "../shared/components/footer/footer";
import { ProjectInfo } from "./project-info/project-info";
import { Navbar } from "../shared/components/navbar/navbar";
import { useState } from "react";

export const Home = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);
  const toggleMenuHandler = () => setIsMenuShown((currentVal) => !currentVal);
  return (
    <>
      <Helmet>
        <title>الرئيسية</title>
        <meta name="description" content="الصفحة الرئيسبة للموقع " />
      </Helmet>
      {/* HEADER */}
      <SliderNavigation isMenuShown={isMenuShown} />
      <Navbar
        pageName="الرئيسية"
        isMenuShown={isMenuShown}
        toggleMenuHandler={toggleMenuHandler}
      />

      {/*ABOUT*/}
      <div className="w-[95%] max-w-[112.8rem] mt-[7.4rem]  mx-auto lg:grid grid-cols-2 gap-1 block mb-[12.0rem]">
        <div className="h-[33rem] lg:h-[54.6rem] relative hidden lg:block">
          <img src="/assets/about.png" alt="sec-img" />
          <img
            className="absolute -top-4.8 -right-5 z-[-1]"
            src="/assets/dots.png"
            alt="back-img"
          />
        </div>
        <div className="text-center lg:text-start max-w-[60rem] m-auto">
          <SectionInfo title={aboutInfo.title} txt={aboutInfo.txt} />
          <MoreBtn url="/about" />
        </div>
      </div>

      {/**services */}
      <div className="w-[95%] max-w-[112.8rem] mt-[7.4rem] mx-auto lg:grid grid-cols-2 gap-1 block">
        <div className="w-[95%] max-w-[40.4rem] relative mx-auto lg:mx-0">
          <img
            className="hidden lg:block lg:w-full z-[-1]"
            src="/assets/services.png"
            alt="sec-img"
          />
          <img
            className="block lg:hidden"
            src="/assets/servicesmobile.png"
            alt="section-img"
          />
          <img
            className="hidden lg:block absolute top-[17.5rem] bottom-4 right-[25rem] z-[2] "
            src="/assets/services2.png"
            alt="back-img"
          />
          <img
            className="hidden lg:block absolute -bottom-[12rem] right-[20rem]  h-[50.6rem] rotate-45 z-[1]"
            src="/assets/services3.png"
            alt="back2-img"
          />
        </div>
        <div className="text-center lg:text-start max-w-[43rem] m-auto">
          <SectionInfo title={servicesInfo.title} txt={servicesInfo.txt} />
          <MoreBtn url="/services" />
        </div>
      </div>
      {/**projects */}
      <div className="w-[95%] max-w-[112.8rem] mt-[7.4rem] mx-auto ">
        <div className="text-center lg:text-start m-auto">
          <SectionInfo title={projectsInfo.title} txt={projectsInfo.txt} />
        </div>

        <div className="block lg:grid lg:grid-cols-2 gap-3.6">
          {projectContent.map((project, indx) => {
            return (
              <ProjectInfo
                key={indx}
                classes="mt-6"
                paragraph={project.paragraph}
                imgSrc={project.imgSrc}
              />
            );
          })}

          <div>
            <p className="text-1.4 lg:text-2.4 text-primary-900 opacity-80 leading-.5 font-normal mt-4 mb-3.2 text-center lg:text-start">
              استراتيجية النجاح تكمن في التوسع المستمر نحو تطوير عقارات سكنيه
              وتجارية وفقا لخطط مدروسة وجعلها قيمة اسثمارية ناجحة .
            </p>
            <MoreBtn url="/projects" />
          </div>
        </div>
      </div>
      {/** success partner  */}
      <div className="w-full mt-[7.4rem]">
        <div className="text-center lg:text-start max-w-[107.4rem] m-auto">
          <SectionInfo title={successPartner.title} txt={successPartner.txt} />
          <SliderPagination />
        </div>
      </div>
      {/**footer */}
      <Footer />
    </>
  );
};

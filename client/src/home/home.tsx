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
import { SliderPagination } from "../shared/components/slider-pagination/slider-pagination";
import { Footer } from "../shared/components/footer/footer";
import { Navbar } from "../shared/components/navbar/navbar";
import { ProjectInfo } from "./project-info/project-info";

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>الرئيسية</title>
        <meta name="description" content="الصفحة الرئيسبة للموقع " />
      </Helmet>
      {/* HEADER */}
      <SliderNavigation pageName="الرئيسية" />

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

      {/* BS */}
      <div className="w-[95%] max-w-[112.8rem] mt-[7.4rem] mx-auto ">
        <div className="text-center lg:text-start m-auto">
          <SectionInfo title={projectsInfo.title} txt={projectsInfo.txt} />
        </div>

        {/* <div className="lg:grid lg:grid-cols-2 gap-3.6">
          <ProjectInfo
            classes="mt-6"
            paragraph={projectContent[0].paragraph}
            imgSrc={projectContent[0].imgSrc}
          />
          <ProjectInfo
            paragraph={projectContent[1].paragraph}
            imgSrc={projectContent[1].imgSrc}
          />
          <ProjectInfo
            paragraph={projectContent[2].paragraph}
            imgSrc={projectContent[2].imgSrc}
          />
          <div>
            <p className="text-primary-900 text-2.4 mt-4">
              استراتيجية النجاح تكمن في التوسع المستمر نحو تطوير عقارات سكنيه
              وتجارية وفقا لخطط مدروسة وجعلها قيمة اسثمارية ناجحة .
            </p>
            <MoreBtn url="/projects" />
          </div>
        </div> */}
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

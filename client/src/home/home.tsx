import { Helmet } from "react-helmet-async"
import { MoreBtn } from "../shared/components/more-btn/more-btn"
import { SectionInfo } from "../shared/components/section-info/section-info"
import { aboutInfo, servicesInfo } from "./home.constants"

export const Home = () => {
  return (
    <>
      <Helmet>
        <title>الرئيسية</title>
        <meta name="description" content="الصفحة الرئيسبة للموقع " />
      </Helmet>
      {/* HEADER */}
      {/* <SliderNavigation /> */}

      {/*ABOUT*/}
      <div className="w-[95%] max-w-[112.8rem] h-[54.6rem] mt-[7.4rem] md:justify-between mx-auto lg:grid grid-cols-2 gap-1 block">
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
      <div className="w-[95%] max-w-[112.8rem] h-[54.6rem] mx-auto mt-[7.4rem] lg:flex justify-between align-middle">
        <div className=" w-[40.4rem] h-[46rem] relative">
          <img
            className="z-[-1]"
            src="/assets/services.png"
            alt="sec-img"
          />
          <img
            className="absolute top-[17.5rem] bottom-4 right-[33.7rem] z-[2] "
            src="/assets/services2.png"
            alt="back-img"
          />
          <img
            className="absolute top-.6 right-[30.1rem] w-[47.6rem] h-[50.6rem] rotate-45 z-[1]"
            src="/assets/services3.png"
            alt="back2-img"
          />
        </div>
        <div className="w-[52.2rem]">
          <SectionInfo title={servicesInfo.title} txt={servicesInfo.txt} />
          <MoreBtn url="/services" />
        </div>
      </div>
      {/**projects */}
      {/* <ProjectInfo
        paragraph={projectContent[3].paragraph}
        imgSrc={projectContent[3].imgSrc}
      /> */}
      {/* BS */}
      {/* <div className="w-[95%] max-w-[112.8rem] h-[54.6rem] mx-auto mt-[7.4rem] ">
      <SectionInfo title={projectsInfo.title} txt={projectsInfo.txt} />
        <div className="lg:grid lg:grid-cols-2 gap-3.6">
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
        </div>
      </div> */}
      {/** success partner  */}
      {/* <div className="w-full h-[62.2rem] mt-[7.4rem]">
        <div className="w-[107.4rem] mx-[18.3rem] mb-[16.4rem]">
          <SectionInfo title={successPartner.title} txt={successPartner.txt} />
          <SliderPagination />
        </div>
      </div> */}
      {/**footer */}
      {/* <Footer /> */}
    </>
  )
}

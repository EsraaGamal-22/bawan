import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AppContext } from "../context-app";
import { IntroSection } from "../shared/components/intro-section/intro-section";
import { Navbar } from "../shared/components/navbar/navbar";
import { SectionInfo } from "../shared/components/section-info/section-info";
import { MoreBtn } from "../shared/components/more-btn/more-btn";
import { servicesInfo } from "../home/home.constants";
import { Footer } from "../shared/components/footer/footer";
import { ServiceItems } from "./service-items/service-items";

export const Services = () => {
  const { isMenuShown, setIsMenuShown } = useContext(AppContext);
  const toggleMenuHandler = () => setIsMenuShown((currentVal) => !currentVal);
  return (
    <>
      <Helmet>
        <title>خدماتنا</title>
        <meta name="description" content="خدمات بوان الرحاب العقارية " />
      </Helmet>
      {/**HEADER */}
      <Navbar
        pageName="خدماتنا"
        isMenuShown={isMenuShown}
        toggleMenuHandler={toggleMenuHandler}
      />
      <IntroSection isMenuShown={isMenuShown} />
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
      {/**service items */}
      <div className="w-[95%] max-w-[112.8rem] mt-[7.4rem] mx-auto ">
        <ServiceItems />
      </div>

      {/**footer */}
      <Footer />
    </>
  );
};

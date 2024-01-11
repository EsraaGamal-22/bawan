import { Helmet } from "react-helmet-async";
import { Navbar } from "../shared/components/navbar/navbar";
import { IntroSection } from "../shared/components/intro-section/intro-section";
import {
  aboutPage,
  moreAbout,
  morePlansInfo,
  telInfoAbout,
} from "./about.constants";
import { Footer } from "../shared/components/footer/footer";

export const About = () => {
  return (
    <>
      <Helmet>
        <title>عن بوان</title>
        <meta name="description" content="تعريف بوان الرحاب العقارية" />
      </Helmet>
      {/**HEADER */}
      <Navbar pageName="عن بوان" />
      <IntroSection
        title={aboutPage.title}
        txt={aboutPage.txt}
        imgSection={aboutPage.imgSection}
      />
      {/** more about */}
      <div className="w-[95%] max-w-[112.8rem] mb-[12rem]  mx-auto lg:grid grid-cols-2 gap-1 block">
        <div className="h-[33rem] lg:h-[54.6rem] relative hidden lg:block">
          <img src="/assets/moreInAbout.png" alt="sec-img" />
          <a
            href={telInfoAbout.link}
            className="w-[80%] lg:grid grid-cols-[40%_15%] -left-[50%] right-[50%] absolute bottom-[15%] z-[1]"
          >
            <div className="bg-white flex items-center justify-end ">
              <div className="w-[6rem] h-[6rem] bg-transparent -rotate-45 transform origin-top-left z-[2]"></div>
              <p className="text-1.6 text-primary-900 ml-2.4">
                {telInfoAbout.phoneNumber}
              </p>
            </div>
            <div className="flex justify-center items-center bg-primary-900 py-2.2">
              <img src="/assets/phoneabout.png" alt="phone-img" />
            </div>
          </a>
        </div>
        <div className="w-full text-center lg:text-start max-w-[60rem] m-auto">
          <h1 className="relative text-3 lg:text-4.8 text-primary-900 font-bold py-2.8 after:right-1/2 after:translate-x-1/2 lg:after:translate-x-0  after:absolute after:top-full lg:after:right-0  after:w-[30rem] after:h-.5 after:bg-gradient-to-l after:from-primary-900 after:to-secondary-700">
            {moreAbout.header}
          </h1>
          <p className="text-2 lg:text-3.2 font-medium text-primary-900 opacity-80 leading-.5 mt-4.9">
            {moreAbout.title}
          </p>
          <p className="mt-2.8 mb-3 lg:mb-5.2 text-1.4 lg:text-2.4 text-primary-900 opacity-80 leading-.5 font-normal ">
            {moreAbout.paragraph}
          </p>
        </div>
      </div>
      {/**about company */}
      <div className="w-[95%] max-w-[112.8rem] mb-[12rem] mx-auto">
        <div className="mb-5.6">
          <img src="/assets/aboutsectionmore.png" alt="about-img" />
        </div>
        <div>
          {morePlansInfo.map((plan) => {
            return (
              <>
                <p
                  key={crypto.randomUUID()}
                  className=" lg:mb-5.2 text-1.4 lg:text-2.4 text-primary-900 opacity-80 leading-.5 font-normal"
                >
                  {plan}
                </p>
              </>
            );
          })}
        </div>
      </div>
      {/**footer */}
      <Footer />
    </>
  );
};

import { Helmet } from "react-helmet-async";
import { Navbar } from "../shared/components/navbar/navbar";
import { IntroSection } from "../shared/components/intro-section/intro-section";
import { aboutPage } from "./about.constants";

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
    </>
  );
};

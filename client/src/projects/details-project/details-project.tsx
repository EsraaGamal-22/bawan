import { Helmet } from "react-helmet-async"
import { Navbar } from "../../shared/components/navbar/navbar"
import { IntroSection } from "../../shared/components/intro-section/intro-section"
import { detailsProjectPage } from "./details-project-constants"
import { Footer } from "../../shared/components/footer/footer"
import { SliderThumbs } from "../slider-thumbs/slider-thumbs"

export const DetailsProject = () => {
  return (
    <>
      <Helmet>
        <title>مشاريعنا</title>
        <meta name="description" content="خدمات بوان الرحاب العقارية " />
      </Helmet>
      {/*HEADER */}
      <Navbar pageName="مشاريعنا" />
      <IntroSection
        title={detailsProjectPage.title}
        txt={detailsProjectPage.txt}
        imgSection={detailsProjectPage.imgSection}
      />
      
      <SliderThumbs />
      {/*footer */}
      <Footer />
    </>
  )
}

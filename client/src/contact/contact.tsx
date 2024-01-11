import { Helmet } from "react-helmet-async";
import { Navbar } from "../shared/components/navbar/navbar";
import { IntroSection } from "../shared/components/intro-section/intro-section";
import { contactDetails, contactLinks, contactPage } from "./contact.constants";
import { ContactInfo } from "./contact-info/contact-info";
import { Footer } from "../shared/components/footer/footer";
import { SocialIcon } from "../shared/components/social-icon/social-icon";

export const Contact = () => {
  return (
    <>
      <Helmet>
        <title>تواصل معنا</title>
        <meta name="description" content="صفحة التواصل مع الرحاب العقارية" />
      </Helmet>
      {/**HEADER */}
      <Navbar  />
      <IntroSection
        title={contactPage.title}
        txt={contactPage.txt}
        imgSection={contactPage.imgSection}
      />
      {/**contact info */}
      <div className="w-[85%] md:w-[50%] lg:w-[95%] max-w-[112.8rem] mb-[12rem] mx-auto block text-center lg:text-start">
        <div className="w-full lg:w-[82%] border border-primary-900 rounded-2 relative  pt-1.5 lg:pr-6  mx-auto lg:mx-0">
          <h1 className="relative text-3 lg:text-4.8 text-primary-900 font-bold py-2.8 after:right-1/2 after:translate-x-1/2 lg:after:translate-x-0  after:absolute after:top-full lg:after:right-0  after:w-[20rem] after:md:w-[30rem]  after:h-.5 after:bg-gradient-to-l after:from-primary-900 after:to-secondary-700">
            تواصل معنا
          </h1>
          <div className="mx-auto mt-5.5 mb-3.2 z-[-1]">
            {contactDetails.map((contact) => {
              return (
                <>
                  <ContactInfo
                    key={crypto.randomUUID()}
                    txt={contact.txt}
                    imgSrc={contact.imgSrc}
                    link={contact.link}
                  />
                </>
              );
            })}
          </div>
          <p className="text-primary-900 text-1.5 md:text-2 lg:text-2.4 font-bold mt-3.2 mb-2.4">
            تابعنا:
          </p>
          <div className="w-[80%] sm:w-[50%] lg:w-[30%] flex flex-row justify-between items-center mx-auto lg:mx-0 mb-[14.3rem]">
            {contactLinks.map((link) => {
              return (
                <SocialIcon
                  iconSrc={link.iconSrc}
                  info={link.info}
                  backgroundColor={link.backgroundColor}
                />
              );
            })}
          </div>
          <div className="hidden absolute top-[5%] -left-[10%] -bottom-[10%] z-[1] lg:block">
            <img src="/assets/contactus.png" alt="contact-img" />
          </div>
          <div className="hidden absolute -top-[50%]  lg:-left-[25%] lg:block">
            <img src="/assets/backContact.png" alt="back-image" />
          </div>
        </div>
      </div>
      {/** Google Map */}

      <div className="relative w-full h-screen">
        <iframe
          className="top-0 left-0 bottom-0 w-full md:absolute h-1/2 md:h-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.2045294605527!2d46.689835699999996!3d24.685494900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f039e41f97e55%3A0x2a7af5dac3abf0fe!2z2LTYsdmD2Kkg2KjZiNin2YYg2KfZhNix2K3Yp9ioINin2YTYudmC2KfYsdmK2Kk!5e0!3m2!1sen!2ssa!4v1704734787593!5m2!1sen!2ssa"
        ></iframe>
      </div>

      {/**footer */}
      <Footer />
    </>
  );
};

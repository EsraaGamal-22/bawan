import { contactDetail, footerLinks } from "./footer-constants";
import { SocialIcon } from "../social-icon/social-icon";

export const Footer = () => {
  return (
    <>
      <div className="w-full  bg-[url(/assets/footerBack.png)] bg-no-repeat bg-cover bg-center relative z-[1] pt-[10.9rem] max-h-fit">
        <div className="w-[70%]  lg:grid grid-cols-2 gap-20 block mx-auto mb-[12.7rem]">
          <div className="flex flex-col justify-center items-center">
            <img src="/assets/logo.png" alt="logo-img" />
            <h1 className=" text-white text-3 lg:text-4 font-bold leading-[7.5rem] text-center">
              شركه بوان الرحاب العقاريه
            </h1>
          </div>
          <div className="text-center lg:text-start">
            <p className=" text-white opacity-80 text-1.4 lg:text-2.4 font-normal">
              المملكه العربيه السعوديه 428 الرياض حي الملقا طريق انس بن مالك
            </p>
            <p className=" text-white opacity-80 text-1.4 lg:text-2.4 font-normal leading-[6rem] mb-1 lg:mb-3.2">
              رقم الاتصال : 0550175111
            </p>
            <div className="w-[90%] sm:w-[55%] flex flex-row justify-between items-center mx-auto lg:mx-0">
              {footerLinks.map((link) => {
                return (
                  <SocialIcon
                    key={crypto.randomUUID()}
                    iconSrc={link.iconSrc}
                    info={link.info}
                    backgroundColor={link.backgroundColor}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center mb-6 w-[95%] lg:w-[50%] mx-auto ">
          {contactDetail.map((contact) => {
            return (
              <>
                <a
                  key={crypto.randomUUID()}
                  href={
                    contact.info == "0550175111"
                      ? "tel:" + `${contact.info}`
                      : "#"
                  }
                  className="flex flex-row justify-between items-center mb-2 lg:mb-0"
                >
                  <p className="text-white text-1.2 lg:text-1.4">
                    {contact.info}
                  </p>
                  <img
                    src={contact.iconSrc}
                    alt="icon-contact"
                    className="mr-1.4"
                  />
                </a>
              </>
            );
          })}
        </div>
        <hr className="text-white opacity-10" />
        <p className="w-fit text-white mx-auto py-4 font-normal text-1 lg:text-1.2">
          جميع الحقوق محفوظة لشركة ©بوان الرحاب العقارية 2022
        </p>
        <img
          src="/assets/footerBackLeft.png"
          className="absolute top-0 left-0 z-[-2] "
          alt="footer-img"
        />
        <img
          src="/assets/footerBackRight.png"
          className="absolute bottom-0 right-0 z-[-1]"
          alt="footer-img"
        />
      </div>
    </>
  );
};

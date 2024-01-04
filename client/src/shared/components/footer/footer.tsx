import { contactDetail, footerLinks } from "./footer-constants";
import { SocialIcon } from "./social-icon/social-icon";

export const Footer = () => {
  return (
    <>
      <div className="w-full h-[62.2rem] bg-[url(/assets/footerBack.png)] bg-no-repeat pt-[10.9rem] pr-[18.1rem] pl-[18.3rem] relative z-[1]">
        <div className="w-[107.4rem] flex justify-between mb-[12.7rem]">
          <div className="flex flex-col justify-center items-center">
            <img src="/assets/logo.png" alt="logo-img" />
            <h1 className="w-[30.4rem] text-white text-4 font-normal leading-[7.5rem] text-center">
              شركه بوان الرحاب العقاريه
            </h1>
          </div>
          <div className="w-[43.0rem] ">
            <p className=" text-white opacity-80 text-2.4 font-normal">
              المملكه العربيه السعوديه 428 الرياض حي الملقا طريق انس بن مالك
            </p>
            <p className=" text-white opacity-80 text-2.4 font-normal leading-[6rem] mb-3.2">
              رقم الاتصال : 920019936
            </p>
            <div className="w-[27.5rem] flex flex-row justify-between items-center">
              {footerLinks.map((link) => {
                return <SocialIcon iconSrc={link.iconSrc} info={link.info} />;
              })}
            </div>
          </div>
        </div>
        <div className="w-[67.8rem] flex justify-between items-center mx-auto mb-6">
          {contactDetail.map((contact) => {
            return (
              <>
                <div className="flex flex-row justify-between items-center">
                  <p className="text-white">{contact.info}</p>
                  <img
                    src={contact.iconSrc}
                    alt="icon-contact"
                    className="mr-1.4"
                  />
                </div>
              </>
            );
          })}
        </div>
        <hr className="text-white opacity-10" />
        <p className="w-fit text-white mx-auto my-4 font-normal">
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

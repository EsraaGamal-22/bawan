import { MenuStatus } from "../navbar/nabar.module";
import { servicesPage } from "./intro-section-constants";

export const IntroSection = ({ isMenuShown }: MenuStatus) => {
  console.log(isMenuShown);
  return (
    <>
      <div className="w-full h-dvh mb-[12.0rem] relative after:w-full after:h-full after:block after:absolute after:top-0 after:z-[1] after:bg-black/55">
        <img
          className="w-full h-full object-cover z-[-1]"
          src="/assets/servicesPage.png"
          alt="img-intro"
        />
        <div
          className={`block absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] z-[2] ${
            !isMenuShown && "hidden"
          }`}
        >
          <h1 className="text-white font-bold text-2 md:text-3 lg:text-4.8 leading-[8rem]">
            {servicesPage.title}
          </h1>
          <p className="text-white text-opacity-60 font-normal text-1.5 md:text-2 lg:text-3.2 leading-[2.8rem] mt-0.5 lg:mt-3.2">
            {servicesPage.txt}
          </p>
        </div>
      </div>
    </>
  );
};

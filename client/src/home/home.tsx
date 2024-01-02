import { Helmet } from "react-helmet-async";
import { MoreBtn } from "../shared/components/more-btn/more-btn";
export const Home = () => {
  return (
    <>
      <Helmet>
        <title>الرئيسية</title>
        {/* BS */}
        <meta name="description" content="home page for app" />
      </Helmet>
      {/*intro to company*/}
      {/* BS */}
      <div className="introSec w-[113.0rem] h-[54.612rem] mr-[12.7rem] ml-[18.3rem] mt-[7.4rem] lg:flex justify-between align-middle">
        <div className="introSec__img w-[44.804rem] h-[54.612rem]">
          <img
            className="mt-4.8 mr-5.407"
            src="/public/assets/pexels-timur-saglambilek-87223 1.png"
            alt="sec-img"
          />
        </div>
        <div className="introSec__info w-[52.423rem] ">
          <h1 className="introSec__info--title relative text-5.6 text-primary-900 font-black pb-2.8 pt-2.8 text-right">
            بوان الرحاب العقارية
          </h1>
          <p className="mt-2.421 mb-[10.7rem] text-2.125 text-primary-900 opacity-80 leading-3.42 font-normal text-right">
            متخصصون في تأسيس مجتمعات عمرانية سريعة النمو تتنوع بين الوحدات
            السكنية والتجارية المميزة بمفهوم جديد للبناء العصري ونمط الحياة الذي
            يستحقه عملائنا، حيث نقدم في بوان خدمات متكاملة على مختلف الأصعدة.
          </p>
          <MoreBtn url="/about" />
        </div>
      </div>
    </>
  );
};

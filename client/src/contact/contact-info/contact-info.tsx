export type ContactUsInfo = {
  txt: string;
  imgSrc: string;
  link: string;
};
export const ContactInfo = ({ txt, imgSrc, link }: ContactUsInfo) => {
  console.log(link);
  return (
    <>
      <a href={link} className="flex items-center">
        <img src={imgSrc} alt="icon-img" />
        <p className="mr-2.4 text-secondary-800 text-1.5 md:text-2 lg:text-2.4">
          {txt}
        </p>
      </a>
    </>
  );
};

import { ContactInfo } from "../footer.module";

export const SocialIcon = ({ iconSrc, info, backgroundColor }: ContactInfo) => {
  return (
    <>
      <a
        href={info}
        className={`${backgroundColor} w-3 h-3 rounded-full flex justify-center items-center`}
      >
        <img src={iconSrc} alt="img-social" />
      </a>
    </>
  );
};

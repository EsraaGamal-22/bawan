import { ContactInfo } from "../footer.module";

export const SocialIcon = ({ iconSrc, info }: ContactInfo) => {
  return (
    <>
      <a
        href={info}
        className="bg-white w-3 h-3 rounded-full flex justify-center items-center"
      >
        <img src={iconSrc} alt="img-social" />
      </a>
    </>
  );
};

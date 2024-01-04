export type ProjectDetails = {
  paragraph: string;
  imgSrc: string;
  classes?: string;
};
export const ProjectInfo = ({ paragraph, imgSrc, classes }: ProjectDetails) => {
  return (
    <>
      <div
        className={
          "relative h-fit after:w-full after:h-full after:block after:absolute after:top-0 after:z-[1] bg-gradient-to-t from-black to-white" +
          ` ${classes || ""}`
        }
      >
        <img className="w-full opacity-70" src={imgSrc} alt="project-img" />
        <div className="absolute bottom-[102.4rem] left-4.4 right-4.4 z-[2]">
          <span className="text-white font-normal text-2.4">{paragraph}</span>
          <a href="/projects">
            <span className="text-white text-[2.4rem] font-extralight  mr-[148.8rem]">
              &#129109;
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

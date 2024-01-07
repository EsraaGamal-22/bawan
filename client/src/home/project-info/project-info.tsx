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
          "relative h-fit sm:w-[50%] sm:mx-auto lg:w-full after:w-full after:h-full after:block after:absolute after:top-0 after:z-[1] bg-gradient-to-t from-black to-white" +
          ` ${classes || ""}`
        }
      >
        <img className="w-full opacity-70" src={imgSrc} alt="project-img" />
        <div className="w-[90%] absolute left-[50%] bottom-0 -translate-x-[50%] -translate-y-[50%] z-[2] flex justify-between items-center">
          <span className="text-white font-normal text-1.4 lg:text-2.4">
            {paragraph}
          </span>
          <a href="/projects">
            <span className="text-white text-3 lg:text-5">&#x2197;</span>
          </a>
        </div>
      </div>
    </>
  );
};

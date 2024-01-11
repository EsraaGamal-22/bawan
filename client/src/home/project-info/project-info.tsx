import { baseURL } from "../../api/axiox-util";

export type ProjectProps = {
  id: number;
  title: string;
  imgUrl: string;
};
export const ProjectInfo = ({ id, title, imgUrl }: ProjectProps) => {
  return (
    <>
      <div
        className={
          "relative after:w-full after:h-full after:block after:absolute after:top-0 after:z-[1] bg-gradient-to-t from-black to-white"
        }
      >
        <img
          className="w-full opacity-70"
          src={baseURL + imgUrl}
          alt="project-img"
        />
        <div className="w-[90%] absolute left-[50%] bottom-0 -translate-x-[50%] -translate-y-[50%] z-[2] flex justify-between items-center">
          <span className="text-white font-normal text-1.4 lg:text-2.4">
            {title}
          </span>
          <a href={"/projects/" + id}>
            <span className="text-white text-3 lg:text-5">&#x2197;</span>
          </a>
        </div>
      </div>
    </>
  );
};

import { Link, useNavigate } from "react-router-dom";

type MoreBtnProps = {
  url: string;
};
export const MoreBtn = ({ url }: MoreBtnProps) => {
  const navigate = useNavigate();

  const redirectToPage = (url: string) => {
    navigate(url);
  };
  return (
    <button
      className="w-max h-5.3 mr-auto pr-2.5 pl-3.2 py-1.6 font-normal text-1.2 lg:text-1.6 bg-white text-primary-900 flex justify-between align-middle border-[0.2rem] border-solid rounded-5 border-primary-800"
      onClick={() => redirectToPage(url)}
    >
      <span className="h-2.1 block w-max font-bold">اكتشف المزيد</span>
      <span className="w-1.4 h-1.4 mr-.6 font-bold">&#x2197;</span>
    </button>
  );
};

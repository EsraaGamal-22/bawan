import { Link } from "react-router-dom"

type MoreBtnProps = {
  url: string
}
export const MoreBtn = ({url}:MoreBtnProps) => {
  return (
    <Link
      to={url}
      className="w-[11.2rem] h-5.2 px-4 py-1.4 font-normal text-1.6 bg-gray-900 text-success-500 "
    >
      <span className="w-[9.1rem] h-1.2">اكتشف المزيد</span>
      <span className="w-2.4 h-2.4 mr-.6">&larr;</span>
    </Link>
  )
}

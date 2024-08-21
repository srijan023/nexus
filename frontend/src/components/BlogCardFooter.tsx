import { CiCircleMinus } from "react-icons/ci";
import { CiBookmarkPlus } from "react-icons/ci";

export default function BlogCardFooter({ time }: {
  time: number
}) {
  return <>
    <div className="flex sm:pt-6 justify-between items-center">
      <div className=" flex text-xs sm:text-sm items-center gap-3">
        <div className="bg-gray-300 text-gray-900 rounded-full px-3 py-1">Custom Tag</div>
        <div className="text-gray-500">{time} min read</div>
      </div>

      <div className="sm:flex hidden text-3xl text-gray-500 items-center gap-4">
        <div className="hover:text-yellow-600 cursor-pointer"><CiBookmarkPlus /></div>
        <div className="hover:text-red-500 cursor-pointer"><CiCircleMinus /></div>
      </div>
    </div>
  </>
}

import Avatar from "./Avatar";

export default function BlogCardHeader({ date, username }: { date: string, username: string }) {
  return <>
    <div className="font-roboto items-center flex gap-1 justify-start">
      <Avatar username={username} />
      <div className="text-xs sm:text-sm hover:underline cursor-pointer font-medium">{username}</div>
      <div className="sm:block hidden font-bold text-gray-500">&middot;</div>
      <div className="sm:block hidden text-sm text-gray-500">{date}</div>
    </div>
  </>
}

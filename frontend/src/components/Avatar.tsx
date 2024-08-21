
export default function Avatar({ username, size = "small" }: { username: string, size?: string }) {
  return <>
    <div className={`bg-gray-600 text-white rounded-full ${size !== "small" ? "text-md px-5 py-3" : "text-sm sm:text-md px-3.5 sm:px-4 py-2 sm:py-2.5 sm:mr-3"}`}>{username[0]}</div >
  </>
}

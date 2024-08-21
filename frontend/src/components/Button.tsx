export default function Button({ shadow = true, text, onClick, type = "primary" }: { text: string, onClick: () => void, type?: string, shadow?: boolean }) {
  return <>
    <button className={`${type == "primary" ? "bg-black text-white" : "bg-white text-slate-500 border-slate-500 border"} hover:scale-105 hover:transition-all px-3 transition-all font-medium text-white w-full py-2 rounded-md ${shadow ? "shadow-md shadow-gray-400" : ""}`} onClick={onClick}>{text}</button>
  </>
}

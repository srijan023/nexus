export default function PilledButton({ text, type, handleClick }: { text: string, handleClick: () => void, type?: string }) {
  return <>
    <button onClick={handleClick} className={`hover:scale-105 px-5 my-2 flex justify-center ${type == "secondary" ? "text-gray-500" : "bg-black text-gray-100"} items-center py-1 rounded-full border border-gray-500`}>
      {text}
    </button >
  </>
}

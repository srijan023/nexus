interface QuotesProps {
  text: string,
  person: string,
  position: string
}
export default function Quotes({ text, person, position }: QuotesProps) {
  return <div className="h-screen bg-gray-200 flex justify-center items-center">
    <div className="px-5 flex flex-col gap-5 max-w-xl">
      <h3 className="font-bold text-2xl">"{text}"</h3>

      <div>
        <h4 className="font-semibold pb-1">{person}</h4>
        <h5 className="text-gray-500 text-sm">{position}</h5>
      </div>
    </div>
  </div>
}

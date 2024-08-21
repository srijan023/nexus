export default function BlogCardTitle({ title }: { title: string }) {
  return <>
    <div className="font-roboto text-md font-semibold sm:font-bold sm:text-xl py-2">
      {title.slice(0, 50)}
    </div>
  </>
}

export default function NavbarIcon({ children }: {
  children: React.ReactNode
}) {
  return <>
    <div className="px-2 text-gray-600 text-xl" >
      {children}
    </div>
  </>
}

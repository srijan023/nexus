export default function AuthenticationCard({ children }: { children: React.ReactNode }) {
  return <>
    <div className="h-screen w-full justify-center items-center flex">
      <div className="min-w-80 w-1/2 flex flex-col gap-5">
        {children}
      </div>
    </div>
  </>
}

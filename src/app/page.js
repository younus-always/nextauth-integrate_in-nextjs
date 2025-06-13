import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav className="bg-slate-900 text-slate-50 font-semibold py-6 px-3">
        <div className="max-w-11/12 mx-auto flex items-center justify-between">
          <h3 className="">Logo</h3>
          <div className="space-x-3">
            <button type="button" className="py-2 px-4 bg-blue-800 rounded-lg cursor-pointer">Login</button>
            <button type="button" className="py-2 px-4 bg-blue-800 rounded-lg cursor-pointer">Register</button>
          </div>
        </div>
      </nav>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <h1 className="text-3xl font-semibold">Next Auth Integrate Project...</h1>
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </main>
      </div>
    </>
  );
}

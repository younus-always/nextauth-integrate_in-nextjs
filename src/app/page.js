import UserInfo from "@/components/UserInfo";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession(authOptions);
  // console.log("Session from main page", session)

  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <h1 className="text-3xl font-semibold">Next Auth Integrate Project...</h1>
        <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>
        {/* user Info */}
        <div>
          <p className="text-3xl font-semibold mb-2">From client component</p>
          <UserInfo />
        </div>
        <div>
          <p className="text-3xl font-semibold mb-2">From server component</p>
          {JSON.stringify(session)}
        </div>
      </div>
    </>
  );
}

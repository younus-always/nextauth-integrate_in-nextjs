import UserInfo from "@/components/UserInfo";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

export default async function Home() {
  const session = await getServerSession(authOptions);
  // console.log("Session from main page", session)

  return (
    <>
      <div className="grid items-center justify-items-center p-8 gap-16">
        <h1 className="text-3xl font-semibold">Next Auth Integrate Project...</h1>
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
        />
        {/* user Info */}
        <div className="flex items-center gap-8">
          <div>
            <p className="text-3xl font-semibold mb-2">From client component</p>
            <UserInfo />
          </div>
          <div>
            <p className="text-3xl font-semibold mb-2">From server component</p>
            {JSON.stringify(session)}
          </div>
        </div>
      </div>
    </>
  );
}

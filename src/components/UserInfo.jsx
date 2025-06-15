"use client"
import { useSession } from "next-auth/react"

const UserInfo = () => {
      const { data: session } = useSession();
      console.log("Session: ", session)

      return (
            <div>
                  {JSON.stringify(session)}
            </div>
      )
}

export default UserInfo


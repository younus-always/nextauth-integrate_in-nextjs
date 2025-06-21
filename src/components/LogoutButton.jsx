"use client"
import { signOut } from "next-auth/react"

const LogoutButton = () => {
      return (
            <button onClick={() => signOut()}
                  className="py-2 px-4 bg-blue-800 rounded-lg cursor-pointer">
                  Logout
            </button>
      )
}

export default LogoutButton

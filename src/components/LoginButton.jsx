"use client"
import { signIn } from "next-auth/react"

const LoginButton = () => {
      return (
            <button onClick={() => signIn()}
                  className="py-2 px-4 bg-blue-800 rounded-lg cursor-pointer">
                  Login
            </button>
      )
}

export default LoginButton

import Link from "next/link"
import LoginButton from "./LoginButton"

const Navber = () => {
      return (
            <nav className="bg-slate-900 text-slate-50 font-semibold py-6 px-3">
                  <div className="max-w-11/12 mx-auto flex items-center justify-between">
                        <h3 className="text-2xl font-semibold">Logo</h3>
                        <div className="space-x-3">
                              <LoginButton />
                              <Link href={'/register'} className="py-2 px-4 bg-blue-800 rounded-lg cursor-pointer">Register</Link>
                        </div>
                  </div>
            </nav>
      )
}

export default Navber
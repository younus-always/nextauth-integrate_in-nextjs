import Link from "next/link"
import LoginButton from "./LoginButton"

const Navber = () => {
      return (
            <nav className="bg-slate-900 text-slate-50 font-semibold py-6 px-3">
                  <div className="max-w-11/12 mx-auto flex items-center justify-around">
                        <Link href={'/'} className="text-2xl font-semibold">Logo</Link>
                              <ul className="flex items-center justify-center gap-4">
                                    <li><Link href={'/'}>Home</Link></li>
                                    <li><Link href={'/about'}>About</Link></li>
                                    <li><Link href={'/contact'}>Contact</Link></li>
                                    <li><Link href={'/dashboard'}>Dashboard</Link></li>
                              </ul>
                              <div className="space-x-3">
                                    <LoginButton />
                                    <Link href={'/register'} className="py-2 px-4 bg-blue-800 rounded-lg cursor-pointer">Register</Link>
                              </div>
                  </div>
            </nav>
      )
}

export default Navber
"use client"
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { RegisterUser } from "@/app/actions/auth/RegisterUser";
import { useState } from "react";
import { NextResponse } from "next/server";

const RegisterForm = () => {
      const [showPassword, setShowPassword] = useState(false);
      // user register function
      const handleRegister = async (e) => {
            e.preventDefault();
            const form = e.target;
            const username = form.username.value;
            const email = form.email.value;
            const password = form.password.value;
            const user = { username, email, password };
            //
            const result = await RegisterUser(user);
            // console.log(result)
            form.reset()
            // Redirect to login page
            if (result.insertedId)
                  return NextResponse.redirect(new URL("/api/auth/signin", req.url))
      };
      // showPassword state change function
      const handleShowPassword = () => {
            if (showPassword) setShowPassword(false)
            else setShowPassword(true)
      };

      return (
            <div className="max-w-lg mx-auto mt-12 p-8 bg-slate-300 rounded-lg">
                  <h2 className="text-center text-2xl font-semibold py-4">Register your account</h2>
                  <form onSubmit={handleRegister} className="space-y-3">
                        <div>
                              <label htmlFor="username" className="block mb-2">Username:</label>
                              <input type="text" name="username" id="username" placeholder="Jhon Doe" className="p-2 rounded-lg bg-slate-100 text-sm w-full ring-1 focus:outline-0" required />
                        </div>
                        <div>
                              <label htmlFor="email" className="block mb-2">Username:</label>
                              <input type="email" name="email" id="email" placeholder="JhonDoe@example.com" className="p-2 rounded-lg bg-slate-100 text-sm w-full ring-1 focus:outline-0" required />
                        </div>
                        <div>
                              <label htmlFor="password" className="block mb-2">Password:</label>
                              <div className="relative">
                                    <input type={showPassword ? "text" : "password"} name="password" id="password" placeholder="password" className="p-2 rounded-lg bg-slate-100 text-sm w-full ring-1 focus:outline-0" required />
                                    {/* password hide show btn */}
                                    <button type="button" onClick={handleShowPassword}
                                          title={showPassword ? "Hide Password" : "Show Password"} title-offset={4}
                                          className="absolute p-1 rounded-full bg-gray-300 top-1.5 right-2 cursor-pointer">
                                          {showPassword ? <IoIosEye size={14} /> : <IoIosEyeOff size={14} />}
                                    </button>
                              </div>

                        </div>
                        <button type="submit" className="w-full p-2 rounded-lg bg-indigo-600 font-semibold text-slate-50 mt-4 cursor-pointer active:scale-95 duration-150">Register</button>
                  </form>
            </div>
      )
}

export default RegisterForm

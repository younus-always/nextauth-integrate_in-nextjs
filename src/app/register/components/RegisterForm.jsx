"use client"

import { RegisterUser } from "@/app/actions/auth/RegisterUser";

const RegisterForm = () => {
      const handleRegister = async (e) => {
            e.preventDefault();
            const form = e.target;
            const username = form.username.value;
            const email = form.email.value;
            const password = form.password.value;
            const user = { username, email, password };
            //
            const result = await RegisterUser(user);
            console.log(result)
      };
      //
      const handleCheck = (e) => {
            console.log(e.target)
      }

      return (
            <div className="max-w-lg mx-auto mt-12 p-8 bg-slate-300 rounded-lg">
                  <h2 className="text-center text-2xl font-semibold py-4">Register your account</h2>
                  <form onSubmit={handleRegister} className="space-y-3">
                        <div>
                              <label htmlFor="username" className="block mb-2">Username:</label>
                              <input type="text" name="username" id="username" placeholder="Jhon Doe" className="p-2 rounded-lg bg-slate-100 text-sm w-full ring-1 focus:outline-0" />
                        </div>
                        <div>
                              <label htmlFor="email" className="block mb-2">Username:</label>
                              <input type="email" name="email" id="email" placeholder="JhonDoe@example.com" className="p-2 rounded-lg bg-slate-100 text-sm w-full ring-1 focus:outline-0" />
                        </div>
                        <div>
                              <label htmlFor="password" className="block mb-2">Password:</label>
                              <input type="password" name="password" id="password" placeholder="password" className="p-2 rounded-lg bg-slate-100 text-sm w-full ring-1 focus:outline-0" />
                              <div className="flex items-center justify-between">
                                    <span>Show password</span>
                                    <input type="checkbox" name="check"
                                          onChange={handleCheck} />
                              </div>
                        </div>
                        <button type="submit" className="w-full p-2 rounded-lg bg-indigo-600 font-semibold text-slate-50 mt-4 cursor-pointer active:scale-95 duration-150">Register</button>
                  </form>
            </div>
      )
}

export default RegisterForm

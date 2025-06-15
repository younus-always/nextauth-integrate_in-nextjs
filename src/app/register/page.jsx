"use client"

const RegisterPage = () => {
      const handleSubmit = (e) => {
            e.preventDefault()
      };

      return (
            <div className="max-w-lg mx-auto mt-12 p-8 bg-slate-300 rounded-lg">
                  <h2 className="text-center text-2xl font-semibold py-4">Register your account</h2>
                  <form onSubmit={handleSubmit} className="space-y-3">
                        <div>
                              <label htmlFor="username" className="block mb-2">Username:</label>
                              <input type="text" name="username" id="username" placeholder="username" className="p-2 rounded-lg bg-slate-100 text-sm w-full ring-1 focus:outline-0" />
                        </div>
                        <div>
                              <label htmlFor="password" className="block mb-2">Password:</label>
                              <input type="password" name="password" id="password" placeholder="password" className="p-2 rounded-lg bg-slate-100 text-sm w-full ring-1 focus:outline-0" />
                        </div>
                        <button type="submit" className="w-full p-2 rounded-lg bg-indigo-600 font-semibold text-slate-50 mt-4 cursor-pointer active:scale-95 duration-150">Register</button>
                  </form>
            </div>
      )
}

export default RegisterPage

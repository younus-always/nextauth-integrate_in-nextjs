import { authOptions } from "@/lib/authOptions"
import { getServerSession } from "next-auth"

const Dashboard = async () => {
      const { user } = await getServerSession(authOptions)
      const { name, email, username, image, role } = user
      return (
            <div>
                  <h1 className="text-3xl font-semibold text-center py-12">Dashboard page - Protected Route</h1>
                  <div>
                        <h3 className="text-2xl font-semibold text-center">Name : {username}</h3>
                        <p className="text-xl font-semibold text-center">Email : {email}</p>
                        <p className="text-xl font-semibold text-center">Role : {role}</p>
                  </div>
            </div>
      )
}

export default Dashboard

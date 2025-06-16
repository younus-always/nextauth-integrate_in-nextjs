import { dbConnect } from "@/lib/dbConnect";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
      providers: [
            CredentialsProvider({
                  // The name to display on the sign in form (e.g. "Sign in with...")
                  name: "Credentials",

                  credentials: {
                        username: { label: "Username", type: "text", placeholder: "jsmith" },
                        email: { label: "Email", type: "email", placeholder: "jsmith@example.com" },
                        password: { label: "Password", type: "password", placeholder: "password" }
                  },
                  async authorize(credentials, req) {
                        console.log("Credentials received:", credentials)
                        const { username, email, password } = credentials;
                        // Get user from db
                        const user = await dbConnect("users").findOne({ username });
                        const isPasswordOk = password == user.password;

                        // return user || null; // same work if else
                        if (isPasswordOk) return user;
                        return null;
                  }
            })
      ],
      callbacks: {
            async session({ session, token, user }) {
                  if (token) {
                        session.user.username = token.username;
                        session.user.role = token.role;
                  }
                  return session
            },
            async jwt({ token, user, account, profile, isNewUser }) {
                  if (user) {
                        token.username = user.username;
                        token.role = user.role;
                  }
                  return token
            }
      }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
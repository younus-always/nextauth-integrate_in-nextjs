import { collectionNames, dbConnect } from "@/lib/dbConnect";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";

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
                        // console.log("Credentials received:", credentials)
                        const { username, email, password } = credentials;
                        // Get user from db
                        const user = await dbConnect(collectionNames.USERS).findOne({ username });
                        const isPasswordOk = password == user.password;

                        // return user || null; // same work if else
                        if (isPasswordOk) return user;
                        return null;
                  }
            }),
            GoogleProvider({
                  clientId: process.env.GOOGLE_CLIENT_ID,
                  clientSecret: process.env.GOOGLE_CLIENT_SECRET
            }),
            GitHubProvider({
                  clientId: process.env.GITHUB_ID,
                  clientSecret: process.env.GITHUB_SECRET
            }),
            FacebookProvider({
                  clientId: process.env.FACEBOOK_CLIENT_ID,
                  clientSecret: process.env.FACEBOOK_CLIENT_SECRET
            })
      ],
      callbacks: {
            async signIn({ user, account, profile, email, credentials }) {
                  if (account) {
                        console.log("From SignIn Callback: ", { user, account, profile, email, credentials })
                  }
                  return true
            },
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
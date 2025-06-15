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
                        const user = {
                              id: "1",
                              name: "J Smith",
                              email: "jsmith@example.com"
                        };

                        // return user || null;
                        if (user) return user;
                        return null;
                  }
            })
      ],
      // ... any other NextAuth config like `pages`, `callbacks`, `session`, etc.
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
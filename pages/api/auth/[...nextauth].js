import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { signIn } from "next-auth/react"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],

  secret: "fbdd86e40b23a5857e1f502cba7c5f09",
  
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async session({ session, token, user}) {
      session.user.username = session.user.name.split(" ").join("").toLocaleLowerCase();

      session.user.uid = token.sub;
      return session;
    }
  }
}
export default NextAuth(authOptions)
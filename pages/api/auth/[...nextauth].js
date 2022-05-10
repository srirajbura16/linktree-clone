import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import TwitterProvider from "next-auth/providers/twitter";
import GoogleProvider from "next-auth/providers/google";
import XataAdapter from "../../../auth";
import { getXataHeaders, DB_PATH } from "../../../services";

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  callbacks: {
    async jwt({ token }) {
      if (!token.username) {
        const res = await fetch(`${DB_PATH}/tables/Users/data/${token.sub}`, {
          method: "GET",
          headers: {
            ...(await getXataHeaders()),
          },
        });
        const user = await res.json();
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.username = token.username;
      session.user.id = token.sub;
      return session;
    },
  },

  adapter: XataAdapter(),

  session: {
    strategy: "jwt",
    maxAge: 24 * 3600,
  },
  secret: process.env.JWT_SECRET,
});

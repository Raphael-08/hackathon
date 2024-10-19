import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import dbConnect from "./MongodbClient";
import { env } from "@/env";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    GithubProvider({
      clientId: env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
      clientSecret: env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const client = await dbConnect;
        const db = client as any;

        const user = await db
          .collection("users")
          .findOne({ email: credentials?.email });

        const bcrypt = require("bcrypt");

        const passwordCorrect = await bcrypt.compare(
          credentials?.password,
          user?.password
        );

        if (passwordCorrect) {
          return {
            id: user?._id,
            email: user?.email,
          };
        }

        console.log("credentials", credentials);
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async signIn({ user, account, profile }) {
      user.oauthToken = account?.access_token;
      user.username = profile?.login;
      console.log(profile);
      return true;
    },
    async jwt({ token, user, trigger, session }) {
      if (trigger === "update") {
        return { ...token, ...session.user };
      }
      if (user) {
        token.oauthToken = user.oauthToken;
        token.username = user.username;
      }
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.oauthToken = token.oauthToken;
      session.user.username = token.username;
      return session;
    },
  },
};

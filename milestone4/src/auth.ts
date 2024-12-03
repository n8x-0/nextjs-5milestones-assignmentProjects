import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import mongoDBconnection from "./models/dbconnect"
import { UserModel } from "./models/usermodel";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),

    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "password", type: "password" }
      },

      authorize: async (credentials) => {
        const { email, password } = credentials;

        await mongoDBconnection();

        const user = await UserModel.findOne({ email }).select("+password");
        const isMatch = bcrypt.compareSync(password as string, user.password)
        console.log("match: ", isMatch);

        if (!user || !isMatch) {
          throw new Error("Invalid cerdentials!")
        }
        return user;
      },
    })
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        await mongoDBconnection();

        const existingUser = await UserModel.findOne({ email: user.email });

        if (!existingUser) {
          await UserModel.create({
            name: user.name,
            email: user.email,
            image: user.image,
          })
        }
      }
      return true
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
      }
      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        const dbUser = await UserModel.findOne({ email: user.email });
        if (dbUser) {
          token.id = dbUser._id.toString();
        }
      }
      return token
    }
  },

  pages: {
    signIn: '/'
  }
})
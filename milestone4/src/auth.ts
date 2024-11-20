import { MongoDBAdapter } from "@auth/mongodb-adapter"
import NextAuth from "next-auth"
import client from "./utils/dbclient"
import GoogleProvider from "next-auth/providers/google";
// import mongoDBconnection from "./models/dbconnect";
// import { UserModel, UserModelInterface } from "./models/usermodel";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(client),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
  ],

  // callbacks: {
  //   async signIn({ user }: { user: UserModelInterface }) {
  //     const { name, email, image } = user;

  //     await mongoDBconnection();
  //     const existingUser = await UserModel.findOne({ email: user.email });
  //     if (!existingUser) {
  //       await UserModel.create({ name, email, image })
  //     }
  //     return true;
  //   },

  //   async session({ session, token, user }) {
  //     if (user) {
  //       session.user.id = user.id;
  //       session.user.posts = user.posts
  //     }
  //     return session;
  //   },
    
  //   async jwt({ token, user }) {
  //     if (user) {
  //       token.id = user.id;
  //       token.posts = user.posts
  //     }
  //     return token;
  //   },
  // }
})


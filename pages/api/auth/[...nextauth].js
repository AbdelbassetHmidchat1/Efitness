import User from "@/models/User";
import dbConnect from "@/utils/dbConnect";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { validateAllOnce } from "@/utils/common";
dbConnect();

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const { email, password } = credentials;
          validateAllOnce(email,password)
          const user = await User.findOne({ email }).exec();
          if (!user){
            throw new Error("Something went wrong")
          }
          
          const userDoc = user._doc;
          const isMatched = await bcrypt.compare(password, userDoc.password);
  
          if (user && isMatched) {
            delete userDoc.password;
            return userDoc;
          } else {
            throw new Error("Email or password incorrect");
          }
          
        } catch (error) {
          throw new Error(error)
        }
       
      },
    }),
  ],

  callbacks: {
    async session(session, user) {
      if (user && user.id) {
        session.user.id = user.id;
      }
      return session;
    },
    async jwt(token, user, account, profile, isNewUser) {
      if (user && user._id) {
        token.id = user._id;
      }
      return token;
    },
  },
});

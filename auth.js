import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import mongoClientPromise from "./database/mongoClientPromise/mongoClientPromise";
import { userModel } from "./models/user-model";
import bcrypt from "bcryptjs";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: MongoDBAdapter(mongoClientPromise),
  session: { strategy: "jwt" },
  providers: [
    CredentialProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.password) {
          throw new Error("Both email and password are required!");
        }

        const user = await userModel.findOne({ email: credentials.email });
        if (!user) {
          throw new Error("User not found! Please register first.");
        }

        const isMatch = await bcrypt.compare(credentials.password, user?.password);
        if (!isMatch) {
          throw new Error("Incorrect password! Try again.");
        }

        return user;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});

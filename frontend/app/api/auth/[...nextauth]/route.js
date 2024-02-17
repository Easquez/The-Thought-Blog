require("dotenv").config();
const axios = require("axios");

import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: {
          label: "username",
          type: "text",
          placeholder: "username",
        },
        email: {
          label: "email",
          type: "text",
          placeholder: "email",
        },
        password: {
          label: "password",
          type: "password",
          placeholder: "password",
        },
      },

      async authorize(credentials) {
        try {
          const response = await axios.post(
            "http://127.0.0.1:5001/invalid",
            credentials,
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          return response.data;
        } catch (error) {
          throw new Error("Error: ", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

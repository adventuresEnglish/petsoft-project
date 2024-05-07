import { authSchema } from "@/lib/validations";
import bcrypt from "bcryptjs";
import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { nextAuthEdgeConfig } from "./auth-edge";
import { getUserByEmail } from "./server-utils";

const config = {
  ...nextAuthEdgeConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        // validation
        const validatedFormData = authSchema.safeParse(credentials);
        if (!validatedFormData.success) {
          return null;
        }

        //extract values
        const { email, password } = validatedFormData.data;

        const user = await getUserByEmail(email);
        if (!user) {
          console.log("No user found");
          return null;
        }

        const passwordMatch = await bcrypt.compare(
          password,
          user.hashedPassword
        );
        if (!passwordMatch) {
          console.log("Invalid credentials");
          return null;
        }

        return user;
      },
    }),
  ],
} satisfies NextAuthConfig;

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(config);

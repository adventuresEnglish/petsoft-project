import NextAuth from "next-auth";
import { nextAuthEdgeConfig } from "./lib/auth-edge";

export default NextAuth(nextAuthEdgeConfig);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

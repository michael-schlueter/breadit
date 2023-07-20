import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth/next";

const handler = NextAuth(authOptions);

// Handler will accomodate GET and POST requests to this route
export {handler as GET, handler as POST}
import { AuthOptions } from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
import { signIn } from "next-auth/react";

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID ?? "",
      clientSecret: process.env.KAKAO_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {},
  secret: process.env.NEXTAUTH_SECRET,
};

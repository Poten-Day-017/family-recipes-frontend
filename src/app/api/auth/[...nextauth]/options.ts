import { AuthOptions } from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
import CredentialsProvider from "next-auth/providers/credentials";
import { logIn } from "@/fetcher";

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID ?? "",
      clientSecret: process.env.KAKAO_CLIENT_SECRET ?? "",
    }),
    CredentialsProvider({
      name: "daedaesonson",
      credentials: {
        name: { label: "username", type: "text" },
        email: { label: "email", type: "text" },
        picture: { label: "picture", type: "text" },
      },
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const { name, email, picture } = credentials as {
          name: string;
          email: string;
          picture: string;
        };

        try {
          const { id, accessToken, refreshToken, isProfileCompleted } =
            await logIn({
              name,
              email,
              picture,
              providerType: "KAKAO",
              deviceToken: "empty", // 추후 알람 등 보낼 때 필요
            });

          return {
            id: id.toString(),
            accessToken,
            refreshToken,
            isProfileCompleted,
          };
        } catch (e) {
          console.log(e);
          return null;
        }
      },
    }),
  ],

  callbacks: {},
  secret: process.env.NEXTAUTH_SECRET,
};

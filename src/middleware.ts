import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import {
  HOME_PATH,
  ONBOARDING_PATH,
  PROTECTED_ROUTES,
  RECIPES_PATH,
} from "@/constants/routes";
import { createNewUser } from "@/fetcher";

// 이 함수는 async - await를 사용할 수 있다.
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log(JSON.stringify(request));
  const token = await getToken({ req: request });

  const redirectToHome = NextResponse.redirect(new URL(HOME_PATH, request.url));

  const redirectToRecipes = NextResponse.redirect(
    new URL(RECIPES_PATH, request.url),
  );

  console.log("middleware session : ", token);

  // 소셜 로그인 이후 다시 돌아왔을 때(redirect경로가 / 로 되어 있음), 기존 멤버인지 조회
  if (token && pathname === "/") {
    // TODO: 현재 멤버인지 api 조회 필요
    const isMember = false;

    // 회원 정보 X
    if (!isMember) {
      // TODO: name이나 email (필수 요소) 없을 떼 별도의 예외처리 필요
      if (!token.name || !token.email) {
        console.log("필수 요소인 name 또는 email이 존재하지 않습니다");
        return NextResponse.next();
      }

      const { accessToken, refreshToken } = await createNewUser({
        name: token.name,
        email: token.email,
        picture: token.picture,
        providerType: "KAKAO",
        // 추후 알람 등 보낼 때 필요
        deviceToken: "empty",
      });

      // 온보딩 페이지로 이동
      return NextResponse.redirect(new URL(ONBOARDING_PATH, request.url));
    }
    // 회원 정보 O -> 리스트 페이지로 이동
    return redirectToRecipes;
  }

  // 로그인 X 시 접근 되지 않는 페이지들
  if (!token && PROTECTED_ROUTES.some((routes) => routes === pathname)) {
    return redirectToHome;
  }

  // 기타 요소들 (아무 처리 x)
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

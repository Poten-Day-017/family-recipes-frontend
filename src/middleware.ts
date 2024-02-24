import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import {
  HOME_PATH,
  ONBOARDING_PATH,
  PROTECTED_ROUTES,
  RECIPES_PATH,
} from "@/constants/routes";

// 이 함수는 async - await를 사용할 수 있다.
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = await getToken({ req: request });

  const redirectToHome = NextResponse.redirect(new URL(HOME_PATH, request.url));

  const redirectToRecipes = NextResponse.redirect(
    new URL(RECIPES_PATH, request.url),
  );

  console.log("middleware session : ", session);

  if (session && pathname === "/") {
    // api 조회
    const isMember = false;

    // 회원 정보 X -> 온보딩 페이지로 이동
    if (!isMember)
      return NextResponse.redirect(new URL(ONBOARDING_PATH, request.url));
    // 회원 정보 O -> 리스트 페이지로 이동
    return redirectToRecipes;
  }

  // 로그인 X 시 접근 되지 않는 페이지들
  if (!session && PROTECTED_ROUTES.some((routes) => routes === pathname)) {
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

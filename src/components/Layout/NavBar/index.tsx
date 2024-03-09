"use client";

import React from "react";
import Link from "next/link";

import CalendarIcon from "@/assets/navbar-icon/icon-calendar.svg";
import RecipeIcon from "@/assets/navbar-icon/icon-add-recipe.svg";
import ProfileIcon from "@/assets/navbar-icon/icon-profile.svg";
import SearchIcon from "@/assets/navbar-icon/icon-search.svg";
import RecipeListIcon from "@/assets/navbar-icon/icon-recipe-list.svg";
import { usePathname } from "next/navigation";
import {
  HOME_PATH,
  ONBOARDING_PATH,
  PROFILE_PATH,
  RECIPES_CALENDER_PATH,
  RECIPES_CREATE_PATH,
  RECIPES_PATH,
  RECIPES_SEARCH_PATH,
} from "@/constants/routes";

export const NAV_LIST = [
  {
    href: RECIPES_PATH,
    icon: <RecipeListIcon className={"current-fill-svg"} />,
    text: "내 레시피",
    headerTitle: "My Family Recipe Book",
  },
  {
    href: RECIPES_SEARCH_PATH,
    icon: <SearchIcon className={"current-fill-svg"} />,
    text: "레시피 검색",
    headerTitle: "Family Recipe Search",
  },
  {
    href: RECIPES_CREATE_PATH,
    icon: <RecipeIcon className={"current-fill-svg"} />,
    text: "레시피 작성",
    headerTitle: "Family Recipe Book",
  },
  {
    href: RECIPES_CALENDER_PATH,
    icon: <CalendarIcon className={"current-fill-svg"} />,
    text: "가족 캘린더",
    headerTitle: "Family Calendar",
  },
  {
    href: PROFILE_PATH,
    icon: <ProfileIcon className={"current-fill-svg"} />,
    text: "프로필",
    headerTitle: "Profile",
  },
] as const;

const NavBar = () => {
  const pathname = usePathname();
  const pathRoutes = pathname.split("/");
  const id = pathname.startsWith(RECIPES_PATH)
    ? pathRoutes[pathRoutes.length - 1]
    : null;

  console.log(id);

  if (
    pathname === HOME_PATH ||
    pathname === ONBOARDING_PATH ||
    (pathname.startsWith(RECIPES_PATH) && !isNaN(Number(id)))
  ) {
    return <div></div>;
  }

  return (
    <>
      <nav
        className="fixed bottom-0 w-full max-w-screen-md h-[85px] px-[23px] pt-[13px] pb-[35px]
      bg-neutral-800
     rounded-tl-[10px] rounded-tr-[10px]
      gap-2.5"
      >
        <div className="inline-flex w-full justify-between">
          {NAV_LIST.map(({ href, icon, text }) => (
            <Link
              key={href}
              href={href}
              className={`flex flex-col justify-center items-center gap-1.5 
            ${pathname === href ? "text-main-orange" : "text-light-gray"}`}
            >
              <div>{icon}</div>
              <div
                className={`text-center text-[10px] font-medium leading-[10px] 
            `}
              >
                {text}
              </div>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default NavBar;

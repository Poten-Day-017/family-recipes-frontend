"use client";

import React from "react";
import Link from "next/link";

import HomeIcon from "@/assets/navbar-icon/icon-home.svg";
import CalendarIcon from "@/assets/navbar-icon/icon-calendar.svg";
import RecipeIcon from "@/assets/navbar-icon/icon-add-recipe.svg";
import ProfileIcon from "@/assets/navbar-icon/icon-user-mono.svg";
import SearchIcon from "@/assets/navbar-icon/icon-search.svg";

export const NAV_LIST = [
  {
    href: "/",
    icon: <HomeIcon />,
    text: "홈",
    headerTitle: "My Family Recipe Note",
  },
  {
    href: "/search",
    icon: <SearchIcon />,
    text: "레시피 검색",
    headerTitle: "",
  },
  {
    href: "/recipes/new",
    icon: <RecipeIcon />,
    text: "레시피 작성",
    headerTitle: "Family Recipe Write",
  },
  {
    href: "/calender",
    icon: <CalendarIcon />,
    text: "가족 캘린더",
    headerTitle: "",
  },
  {
    href: "/profile",
    icon: <ProfileIcon />,
    text: "프로필",
    headerTitle: "",
  },
] as const;

const NavBar = () => {
  // const [navIdx, setNavIdx] = useState(0);
  return (
    <div
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
            className="flex flex-col justify-center items-center gap-1.5"
          >
            <div>{icon}</div>
            <div
              className={`text-center text-[10px] font-medium leading-[10px] 
             text-light-gray
            `}
            >
              {text}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;

import type { FC, PropsWithChildren } from "react";
import Header from "@/components/Layout/Header";
import NavBar from "@/components/Layout/NavBar";
import {
  PROFILE_PATH,
  RECIPES_CALENDER_PATH,
  RECIPES_CREATE_PATH,
  RECIPES_DETAIL_PATH,
  RECIPES_PATH,
  RECIPES_SEARCH_PATH,
} from "@/constants/routes";

import React from "react";
import { usePathname } from "next/navigation";

const HEADER_LIST = [
  {
    href: RECIPES_PATH,
    headerTitle: "My Family Recipe Book",
  },
  {
    href: RECIPES_SEARCH_PATH,
    headerTitle: "Family Recipe Search",
  },
  {
    href: RECIPES_CREATE_PATH,
    headerTitle: "Family Recipe Book",
  },
  {
    href: RECIPES_DETAIL_PATH,
    headerTitle: "Profile",
  },
  {
    href: RECIPES_CALENDER_PATH,
    headerTitle: "Family Calendar",
  },
  {
    href: PROFILE_PATH,
    headerTitle: "Profile",
  },
] as const;

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();

  return (
    <div>
      <Header text={} />
      {children}
      <NavBar />
    </div>
  );
};

export default Layout;

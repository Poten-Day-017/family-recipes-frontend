export const HOME_PATH = "/";
export const PROFILE_PATH = "/profile";

export const ONBOARDING_PATH = "/onboarding";

export const RECIPES_PATH = "/recipes";
export const RECIPES_CREATE_PATH = RECIPES_PATH + "/new";
export const RECIPES_SEARCH_PATH = RECIPES_PATH + "/search";
export const RECIPES_CALENDER_PATH = RECIPES_PATH + "/calender";

export const RECIPES_DETAIL_PATH = `${RECIPES_PATH}/:id`;

export const getRecipeDetailPath = (recipeId: number) =>
  `${RECIPES_PATH}/${recipeId}`;

/* 비로그인 시 접근 할 수 없는 */
export const PROTECTED_ROUTES = [PROFILE_PATH, RECIPES_PATH];

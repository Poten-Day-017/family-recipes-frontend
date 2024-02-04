import { CategoryRes, RecipeDetailRes, RecipeListRes } from "@/fetcher/types";

const BASE_URL = " https://daedaesonson.site/api/v1/";

type GetRecipesFunc = {
  (params: {
    page: number;
    // size: string;
    // sorting: string;
  }): Promise<RecipeListRes>;
};

export const getRecipes: GetRecipesFunc = async () => {
  // const searchParams = new URLSearchParams({ page: "1" });
  const response = await fetch(BASE_URL + "recipes?page=1");
  return response.json();
};

type GetRecipeDetailFunc = {
  // eslint-disable-next-line no-unused-vars
  (id: string): Promise<RecipeDetailRes>;
};

export const getRecipeDetail: GetRecipeDetailFunc = async (id) => {
  const response = await fetch(BASE_URL + "/recipes" + "/" + id);
  return response.json();
};

type GetCategory = {
  (): Promise<CategoryRes>;
};

export const getCategory: GetCategory = async () => {
  const response = await fetch(BASE_URL + "recipes/category");
  return response.json();
};

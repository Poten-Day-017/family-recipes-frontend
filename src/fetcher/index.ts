import { CategoryRes, RecipeDetailRes, RecipeListRes } from "@/fetcher/types";
import { notFound } from "next/navigation";
import httpClient from "@/fetcher/fetch";

const BASE_URL = "https://daedaesonson.site/api/v1/";

const backendFetch = httpClient({
  baseUrl: BASE_URL,
  headers: { Accept: "application/json" },
  cache: "no-store",
  interceptors: {
    request: async (url, init) => {
      console.log("********* before sending request *********");
      console.log("url: ", url.toString());
      console.log("requestInit:", init);

      return init;
    },
    response: async (response) => {
      console.log("********* after receiving response *********");
      console.log("response:", JSON.stringify(response));
      console.log("requestInit:");
      return response;
    },
  },
});

type GetRecipesFunc = {
  (params: { page: number }): Promise<RecipeListRes>;
};

export const getRecipes: GetRecipesFunc = async ({ page }) => {
  const response = await backendFetch<ReturnType<GetRecipesFunc>>(`recipes`, {
    params: {
      page,
    },
  });
  return response;
};

// export const getRecipes: GetRecipesFunc = async ({ page }) => {
//   // const searchParams = new URLSearchParams({ page: "1" });
//
//   const response = await fetch(BASE_URL + `recipes?page=${page}`);
//   return response.json();
// };

type GetRecipeDetailFunc = {
  (id: string): Promise<RecipeDetailRes>;
};

export const getRecipeDetail: GetRecipeDetailFunc = async (id) => {
  const response = await fetch(BASE_URL + "recipes/" + id);
  console.log("recipeDetail response : ", response.status);

  if (response.ok) {
    return response.json();
  } else {
    notFound();
  }
};

type GetCategory = {
  (): Promise<CategoryRes>;
};

export const getCategory: GetCategory = async () => {
  const response = await fetch(BASE_URL + "recipes/category");
  return response.json();
};

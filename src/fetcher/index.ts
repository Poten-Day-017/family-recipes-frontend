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
      console.log("response: ", JSON.stringify(response));
      console.log("is it ok?: ", response.ok);
      if (!response.ok) {
        if (400 <= response.status && response.status < 500) {
          console.log("ClientError: ", response.status);
        }
        if (400 <= response.status && response.status < 500) {
          console.error("ServerError : ", response.status);
        }
        throw Error(response.status + response.statusText);
      }

      return response.json();
    },
  },
});

type GetRecipesFunc = {
  (params: { page: number }): Promise<RecipeListRes>;
};

export const getRecipes: GetRecipesFunc = async ({ page }) => {
  try {
    const response = await backendFetch<ReturnType<GetRecipesFunc>>(`recipes`, {
      params: {
        page,
      },
    });
    return response;
  } catch (e) {
    // NOTE: 상황에 맞는 페이지 보여줘야 함.
    notFound();
  }
};

type GetRecipeDetailFunc = {
  (id: string): Promise<RecipeDetailRes>;
};

export const getRecipeDetail: GetRecipeDetailFunc = async (id) => {
  try {
    const response = await fetch(BASE_URL + "recipes/" + id);
    console.log("recipeDetail response : ", response.status);
    return response.json();
  } catch {
    notFound();
  }
};

type GetCategory = {
  (): Promise<CategoryRes>;
};

export const getCategory: GetCategory = async () => {
  try {
    const response = await fetch(BASE_URL + "recipes/category");
    return response.json();
  } catch {
    notFound();
  }
};

export const putNickname = async () => {
  const response = await backendFetch("/nickname", {
    method: "PUT",
  });
};

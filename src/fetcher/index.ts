import {
  CategoryRes,
  CreateUserBody,
  NicknameBody,
  NicknameRes,
  RecipeDetailRes,
  RecipeListRes,
  UserRes,
} from "@/fetcher/types";
import { notFound } from "next/navigation";
import httpClient from "@/fetcher/fetch";

const BASE_URL = "https://daedaesonson.site/api/v1/";

const backendFetch = httpClient({
  baseUrl: BASE_URL,
  headers: { "Content-Type": "application/json" },
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
      console.log("response: ", response);
      console.log("is it ok?: ", response.ok);

      if (!response.ok) {
        if (400 <= response.status && response.status < 500) {
          console.log("ClientError: ", response.status);
        } else {
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

type GetRecipeDetailFn = {
  (id: string): Promise<RecipeDetailRes>;
};

export const getRecipeDetail: GetRecipeDetailFn = async (id) => {
  try {
    const response = await backendFetch(BASE_URL + "recipes/" + id);
    return response;
  } catch {
    notFound();
  }
};

type GetCategoryFn = {
  (): Promise<CategoryRes>;
};

export const getCategory: GetCategoryFn = async () => {
  try {
    const response = await backendFetch(BASE_URL + "recipes/category");
    return response;
  } catch {
    notFound();
  }
};

type CreateNewUserFn = {
  (createUserbody: CreateUserBody): Promise<UserRes>;
};

export const createNewUser: CreateNewUserFn = async (
  createUserBody: CreateUserBody,
) => {
  try {
    const response = await backendFetch<UserRes>("social/login", {
      method: "POST",
      body: JSON.stringify(createUserBody),
    });
    return response;
  } catch {
    throw new Error("cant create user");
  }
};

type PutNicknameFn = {
  (putNickname: NicknameBody): Promise<NicknameRes>;
};

export const putNickname: PutNicknameFn = async ({ userId, nickname }) => {
  try {
    const response = await backendFetch(`/users/${userId}/nickname`, {
      method: "PUT",
      body: JSON.stringify({
        userId,
        nickname,
      }),
    });
    return response;
  } catch {
    notFound();
  }
};

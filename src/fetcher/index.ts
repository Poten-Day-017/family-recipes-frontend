import type {
  CategoryRes,
  CreateUserBody,
  NewRecipeBody,
  NicknameBody,
  NicknameRes,
  RecipeDetailRes,
  RecipeListRes,
  UserRes,
} from "@/fetcher/types";
import { notFound } from "next/navigation";
import httpClient from "@/fetcher/fetch";
import { OnBoardBody } from "@/fetcher/types";

const BASE_URL = "https://daedaesonson.site/api/v1/";

const backendFetch = httpClient({
  baseUrl: BASE_URL,
  headers: { "Content-Type": "application/json" },
  cache: "no-cache",
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
  (id: number): Promise<RecipeDetailRes>;
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

export const logIn: CreateNewUserFn = async (
  createUserBody: CreateUserBody,
) => {
  try {
    const response = await backendFetch<UserRes>("social/login", {
      method: "POST",
      body: JSON.stringify(createUserBody),
    });
    return response;
  } catch {
    throw new Error("can't create user");
  }
};

type PutNicknameFn = {
  (putNicknameBody: NicknameBody): Promise<NicknameRes>;
};

export const putNickname: PutNicknameFn = async ({ userId, userNickname }) => {
  try {
    const response = await backendFetch(`/users/${userId}/nickname`, {
      method: "PUT",
      body: JSON.stringify({
        userId,
        userNickname,
      }),
    });
    return response;
  } catch {
    notFound();
  }
};

const exp = {
  title: "어머니의 김치찌개",
  origin: "어머니",
  content: "가족의 레시피를 간단하게 1줄로 소개해보세요.",
  category: "001",
  capacity: 2,
  isOpen: true,
  ingredientList: [{ order: 1, name: "채끝살", amount: "300g" }],
  secretIngredientList: [{ order: 1, name: "채끝살", amount: "300g" }],
  procedureList: [
    {
      order: 1,
      description: "쌀은 씻어 30분간 불린다. 쪽파는 송송 썰어 둔다.",
    },
  ],
};

export const createNewRecipe = async (newRecipeBody: NewRecipeBody) => {
  const recipeFormData = new FormData();
  const {
    recipeCreateRequest,
    cookingImage,
    cookingVideo,
    procedureImageList,
  } = newRecipeBody;

  const recipeCreateRequestBlob = new Blob(
    [JSON.stringify(recipeCreateRequest)],
    {
      type: "application/json",
    },
  );

  recipeFormData.append("recipeCreateRequest", recipeCreateRequestBlob);
  recipeFormData.append("cookingImage", cookingImage as File | string);

  console.log(cookingVideo);

  if (cookingVideo) {
    recipeFormData.append("cookingVideo", cookingVideo as File | string);
  }

  // const {
  //   title,
  //   origin,
  //   content,
  //   category,
  //   capacity,
  //   isOpen,
  //   ingredientList,
  //   secretIngredientList,
  //   procedureList,
  // } = recipeCreateRequest;
  // recipeFormData.append("title", title);
  // recipeFormData.append("origin", origin);
  // recipeFormData.append("content", content);
  // recipeFormData.append("category", category);
  // recipeFormData.append("capacity", capacity.toString());
  // recipeFormData.append("isOpen", isOpen.toString());
  // recipeFormData.append("ingredientList", ingredientList.toString());
  // recipeFormData.append(
  //   "secretIngredientList",
  //   secretIngredientList.toString(),
  // );
  // recipeFormData.append("procedureList", procedureList.toString());

  procedureImageList.forEach((procedureImage, idx) => {
    if (procedureImage) {
      recipeFormData.append(
        `procedureImage${idx + 1}`,
        procedureImage as File | string,
      );
    }
  });

  try {
    const response = await backendFetch(`recipes`, {
      method: "POST",
      body: recipeFormData,
      headers: {
        // "Content-Type": "multipart/form-data",
      },
    });

    return response;
  } catch {
    notFound();
  }
};

export const completeOnboard = async (onboardBody: OnBoardBody) => {
  try {
    const response = await backendFetch(`/users/onboard`, {
      method: "POST",
      body: JSON.stringify(onboardBody),
    });

    return response;
  } catch (e) {
    notFound();
  }
};

export const getNickname = async (id?: number) => {
  if (!id) {
    throw Error("need id");
  }

  try {
    const response = await backendFetch(`users/${id}`, {
      method: "GET",
    });

    return response;
  } catch (e) {
    console.log(e);
  }
};

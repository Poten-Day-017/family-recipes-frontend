interface Recipe {
  order: number; // 개인 별 순서
  recipeId: number; // 레시피 ID
  title: string; // 제목
  origin: string; // 주인
  content: string; // 레시피 소개
  category: string; // 카테고리 코드
  categoryName: string; // 카테고리 명
  capacity: number; // 레시피 기준 인원
  totalOpenYn: "Y" | "N"; // 레시피 공개 여부
  cookingImageUrl: string; // 요리 대표 사진
  cookingVideoUrl: string; // 요리 대표 동영상
  createdAt: string; // YYYY.MM.DD 형식 날짜
}

export interface RecipeListRes {
  page: number;
  size: number;
  hasNext: boolean;
  recipeList: Recipe[];
}

export interface Ingredient {
  order: number;
  name: string;
  amount?: string;
}

export interface Procedure {
  order: number;
  description?: string;
  imageUrl?: string;
}
export interface RecipeDetailRes {
  title: string;
  origin: string;
  content: string;
  category: string;
  categoryName: string;
  capacity: number;
  episode: string;
  totalOpenYn: string;
  cookingVideoUrl: string;
  cookingImageUrl: string;
  secretIngredientList: Ingredient[];
  ingredientList: Ingredient[];
  procedureList: Procedure[];
}

export interface Category {
  name: string;
  code: string;
}

export interface CategoryRes {
  categoryList: Category[];
}

export interface CreateUserBody {
  name: string;
  email: string;
  picture: string | null | undefined;
  providerType: "KAKAO";
  deviceToken: string;
}

export interface UserRes {
  isProfileCompleted: boolean;
  id: number;
  accessToken: string;
  refreshToken: string;
  appVersion: string;
}

export interface NicknameBody {
  userId: number;
  nickname: string;
}

export type NicknameRes = "string";

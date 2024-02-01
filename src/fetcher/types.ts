interface Recipe {
  cookingImageUrl: string; // 요리 대표 사진
  title: string; // 제목
  origin: string; // 주인
  content: string; // 레시피 소개
  category: string; // 카테고리 코드
  categoryName: string; // 카테고리 명
  capacity: number; // 레시피 기준 인원
  totalOpenYn: string; // 레시피 공개 여부
}

export interface RecipeListRes {
  page: number;
  size: number;
  hasNext: boolean;
  recipeList: Recipe[];
}

interface Ingredient {
  order: number;
  name: string;
  amount: string;
}

interface ProcedureList {
  order: number;
  description: string;
}
export interface RecipeDetailRes {
  title: string;
  origin: string;
  content: string;
  category: string;
  categoryName: string;
  capacity: number;
  episode: string;
  episodeOpenYn: string;
  totalOpenYn: string;
  cookingVideoUrl: string;
  cookingImageUrl: string;
  ingredientList: Ingredient[];
  procedureList: ProcedureList[];
}

"use client";

import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import SelectField from "@/components/Select";
import PrivateToggle from "./PrivateToggleField";
import ImageField from "@/components/RecipeForm/ImageFormField";
import VideoField from "@/components/RecipeForm/VideoFormField";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Ingredient, Procedure } from "@/fetcher/types";
import TitleTextField from "@/components/RecipeForm/TitleTextField";
import OriginTextField from "@/components/RecipeForm/OriginTextField";
import RecipeCounterField from "./RecipeCounterField";
import IngredientField from "@/components/RecipeForm/IngredientField";

interface FormFieldsType {
  isOpen: boolean; //: 공개 비공개 여부
  title: string; // 제목: 필수 입력, 최소 2자, 최대 30자
  origin: string; //주인: 필수 입력, 최대 30자
  content: string; // 소개: 최소 2자, 최대 30자
  categoryCode: string; // 카태고리 드롭다운
  capacity: number; // 레시피
  episode: string;
  ingredientList: Ingredient[];
  procedureList: Procedure[];
  cookingImage: string; // 이미지 파일
  cookingVideo: string; // 동영상 파일
}

const EMPTY_STRING = "";

const VALIDATION_TEXT_TITLE =
  "레시피 제목을 최소 2자 최대 30자 이내로 작성해주세요.";
const VALIDATION_TEXT_ORIGIN = "가족 레시피를 만든 사람을 적어주세요.";
const VALIDATION_TEXT_CATEGORY = "레시피 카테고리를 선택해주세요.";

const formSchema = z.object({
  isOpen: z.boolean(),
  title: z
    .string()
    .min(2, { message: VALIDATION_TEXT_TITLE })
    .max(30, { message: VALIDATION_TEXT_TITLE }),
  origin: z.string().min(1, { message: VALIDATION_TEXT_ORIGIN }),
  categoryCode: z.string().min(1, { message: VALIDATION_TEXT_CATEGORY }),
  capacity: z.number().min(1),
});

const RecipeForm = () => {
  const methods = useForm<FormFieldsType>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
    defaultValues: {
      isOpen: true,
      title: EMPTY_STRING,
      origin: EMPTY_STRING,
      categoryCode: EMPTY_STRING,
      capacity: 1,
      // episode
      // ingredientList
      // procedureList
    },
  });

  const { handleSubmit } = methods;
  const onSubmit = (data: FormFieldsType) => {
    console.log(data);
  };

  return (
    <div className="h-full">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <PrivateToggle />
          <TitleTextField />
          <OriginTextField />
          <SelectField />
          <ImageField />
          <VideoField />
          <RecipeCounterField />
          <IngredientField />
        </form>
      </FormProvider>
      <div className="w-full h-[85px]"></div>
    </div>
  );
};

export default RecipeForm;

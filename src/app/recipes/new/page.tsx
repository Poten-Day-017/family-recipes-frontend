"use client";

import React, { useState } from "react";
import InputText from "../../../components/common/Input";
import { FormProvider, useForm } from "react-hook-form";
import SelectField from "@/components/Select";
import PrivateToggle from "../../../components/RecipeForm/PrivateToggleField";
import useGetCategory from "../../../queries";
import ImageField from "@/components/RecipeForm/ImageFormField";
import VideoField from "@/components/RecipeForm/VideoFormField";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Ingredient, Procedure } from "@/fetcher/types";
import Header from "@/components/Layout/Header";

interface FormFieldsType {
  title: string;
  origin: string;
  content: string;
  categoryCode: string;
  capacity: number;
  episode: string;
  isOpen: boolean;
  ingredientList: Ingredient[];
  procedureList: Procedure[];
}

const VALIDATION_TEXT_TITLE =
  "레시피 제목을 최소 2자 최대 30자 이내로 작성해주세요.";
const VALIDATION_TEXT_ORIGIN = "가족 레시피를 만든 사람을 적어주세요.";
const VALIDATION_TEXT_CATEGORY = "레시피 카테고리를 선택해주세요.";

const formSchema = z.object({
  title: z.string().min(2).max(30),
  origin: z.string().min(1, { message: "" }),
  content: z.string(),
  categoryCode: z.string(),
});

const NewRecipePage = () => {
  const methods = useForm<FormFieldsType>({
    mode: "onBlur",
    resolver: zodResolver(formSchema),
  });

  const { handleSubmit } = methods;
  const [isPrivate, setIsPrivate] = useState(false);

  const {
    data: { categoryList },
  } = useGetCategory();

  console.log(categoryList);

  return (
    <div className="h-full">
      <FormProvider {...methods}>
        <form className="">
          <PrivateToggle isPrivate={isPrivate} setIsPrivate={setIsPrivate} />
          <InputText
            title="레시피 제목"
            required
            explanation="최소 2자/ 최대 30자"
            placeholder="레시피 제목을 입력해주세요."
            error="레시피 제목을 최소 2자 최대 30자 이내로 작성해주세요."
          />
          <InputText
            title="레시피 주인"
            required
            placeholder="우리 가족 레시피는 누가 만들었나요? ex) 엄마"
          />
          <InputText
            title="레시피 소개"
            explanation="최소 2자/ 최대 30자"
            placeholder="가족 레시피를 간단하게 1줄로 소개해보세요."
          />
          <SelectField />
          <ImageField />
          <VideoField />
        </form>
      </FormProvider>
      <div className="h-[58px]"></div>
    </div>
  );
};

export default NewRecipePage;

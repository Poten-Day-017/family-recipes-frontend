"use client";

import React, { useState } from "react";
import InputText from "@/components/Input";
import { FormProvider, useForm } from "react-hook-form";
import SelectField from "@/components/Select";
import NewHeader from "@/components/Layout/Header/NewHeader";
import PrivateToggle from "../../../components/RecipeForm/PrivateToggleField";
import useGetCategory from "@/hooks/query";
import ImageField from "@/components/RecipeForm/ImageFormField";
import VideoField from "@/components/RecipeForm/VideoFormField";

interface FormFieldsType {
  title: string;
  origin: string;
  content: string;
  categoryCode: string;
  capacity: number;
  episode: string;
  private: boolean;
}

const NewRecipePage = () => {
  const methods = useForm<FormFieldsType>();
  const { handleSubmit } = methods;
  const [isPrivate, setIsPrivate] = useState(false);

  const {
    data: { categoryList },
  } = useGetCategory();
  console.log(categoryList);

  const onSubmit = () => {};

  return (
    <div className="h-full">
      <NewHeader
        onSubmit={() => {
          handleSubmit(onSubmit);
        }}
      />
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

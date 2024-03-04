import React from "react";
import InputText from "@/components/common/Input";
import { useFormContext } from "react-hook-form";

const TitleInput = () => {
  const { register } = useFormContext();

  return (
    <InputText
      title="레시피 제목"
      required
      explanation="최소 2자/ 최대 30자"
      placeholder="레시피 제목을 입력해주세요."
      error="레시피 제목을 최소 2자 최대 30자 이내로 작성해주세요."
      {...register}
    />
  );
};

export default TitleInput;

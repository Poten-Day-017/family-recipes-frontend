import React from "react";
import InputText from "@/components/common/Input";
import { useController, useFormContext } from "react-hook-form";

const TitleInputField = () => {
  const { control } = useFormContext();

  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name: "title",
  });

  return (
    <InputText
      title="레시피 제목"
      required
      explanation="최소 2자/ 최대 30자"
      placeholder="레시피 제목을 입력해주세요."
      error={error?.message}
      {...field}
    />
  );
};

export default TitleInputField;

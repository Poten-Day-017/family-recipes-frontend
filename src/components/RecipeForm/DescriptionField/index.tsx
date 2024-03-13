import React from "react";
import InputText from "@/components/common/Input";
import { useController, useFormContext } from "react-hook-form";

const DesciptionField = () => {
  const { control } = useFormContext();

  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name: "content",
  });

  return (
    <InputText
      title="레시피 소개"
      placeholder="가족 레시피를 간단하게 1줄로 소개해보세요."
      error={error?.message}
      {...field}
    />
  );
};

export default DesciptionField;

import React from "react";
import InputText from "@/components/common/Input";
import { useController, useFormContext } from "react-hook-form";

const OriginTextField = () => {
  const { control } = useFormContext();
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    name: "origin",
  });

  return (
    <InputText
      title="레시피 주인"
      required
      placeholder="우리 가족 레시피는 누가 만들었나요? ex) 엄마"
      error={error?.message}
      {...field}
    />
  );
};

export default OriginTextField;

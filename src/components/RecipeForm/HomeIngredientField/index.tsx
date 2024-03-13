"use client";

import React, { FC } from "react";
import InputText from "@/components/common/Input";
import AddListIcon from "@/assets/icons/add-list.svg";
import {
  FieldValues,
  useFieldArray,
  useFormContext,
  UseFormRegister,
} from "react-hook-form";

// TODO: COMPONENT 공통화
interface IngredientProps {
  idx: number;
  register: UseFormRegister<FieldValues>;
}

const IngredientInput: FC<IngredientProps> = ({ idx, register }) => {
  return (
    <div className="w-full flex gap-1 justify-between items-center">
      <InputText
        placeholder="양념재료 입력"
        {...register(`secretIngredientList.${idx}.name`)}
      />
      <div className="w-[8px] h-px bg-beige-500" />
      <InputText
        placeholder="재료 단위 입력 ex)100g"
        {...register(`secretIngredientList.${idx}.amount`)}
      />
    </div>
  );
};

const IngredientField = () => {
  const { control, register } = useFormContext();
  const { fields, append } = useFieldArray({
    name: "secretIngredientList",
    control,
  });

  const addNewIngredient = () => {
    append({
      name: "",
      amount: "",
    });
  };

  return (
    <div className="flex flex-col gap-[15px] items-center my-4">
      <div className="font-bold text-xs text-left w-full">우리집 비법 양념</div>
      {fields.map((item, index) => (
        <IngredientInput key={item.id} idx={index} register={register} />
      ))}
      <div
        className="pt-[6px] pb-[17px] border-b boarder-beige-400 w-full flex justify-center"
        onClick={addNewIngredient}
      >
        <AddListIcon />
      </div>
    </div>
  );
};

export default IngredientField;

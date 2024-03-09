import React, { FC } from "react";
import { useController, useFormContext } from "react-hook-form";

// TODO: Toggle Animation 추가하기
const OpenToggle: FC = () => {
  const { control } = useFormContext();
  const { field } = useController({
    name: "isOpen",
    control,
  });

  const isOpen = field.value;
  console.log(field.value);

  return (
    <div className="w-full h-[50px] flex justify-center items-center text-beige-500 border rounded-[5px] mt-4">
      <div
        className={`w-full h-[44px] border-1 border-transparent rounded-[5px] flex justify-center items-center ${!isOpen ? "bg-main-black text-white" : ""} `}
        onClick={() => field.onChange(false)}
      >
        비공개
      </div>
      <div
        className={`w-full h-[44px] order-1 border-transparent rounded-[5px] flex justify-center items-center ${!isOpen ? "" : "bg-main-black text-white"} `}
        onClick={() => field.onChange(true)}
      >
        전체 공개
      </div>
    </div>
  );
};

export default OpenToggle;

import React from "react";
import { useController, useFormContext } from "react-hook-form";
import PlusIcon from "@/assets/icons/plus.svg";
import MinusIcon from "@/assets/icons/minus.svg";

const MIN_COUNT = 1;
const RecipeCounterField = () => {
  const { control } = useFormContext();
  const {
    field: { value, onChange },
  } = useController({
    name: "capacity",
    control,
  });

  console.log(value);

  const onPlus = () => onChange(() => value + 1);

  const onMinus = () => {
    if (value <= MIN_COUNT) {
      return;
    }

    onChange(() => value - 1);
  };

  return (
    <div>
      <div className="flex justify-between py-4">
        <div className="flex flex-col">
          <div className="text-[#151B1E] text-xs font-bold">
            레시피 인분
            <span className="text-main-orange">*</span>
          </div>
          <span className="text-beige-500 text-xs">최소단위 1인분 이상</span>
        </div>
        <div
          className="w-[176px] h-[41px] rounded-full border border-beige-600 flex justify-between items-center
        px-5"
        >
          <div>
            <MinusIcon
              className={`text-main-black`}
              onClick={() => onMinus()}
            />
          </div>
          <div className="font-semibold text-lg">{value}</div>
          <div>
            <PlusIcon onClick={() => onPlus()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCounterField;

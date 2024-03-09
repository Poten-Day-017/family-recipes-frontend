import React from "react";
import { Listbox } from "@headlessui/react";
import DropDown from "@/assets/drop_down.svg";
import useGetCategory from "@/queries/query/useGetCategory";
import { useController, useFormContext } from "react-hook-form";

const PLACE_HOLDER_TEXT = "레시피 카테고리";

// NOTE: unControl도 되는지 찾아보기
const SelectField = () => {
  const { control } = useFormContext();
  const {
    field: { value, onChange },
    fieldState: { error, isDirty, isTouched },
  } = useController({
    control,
    name: "categoryCode",
  });
  const { data } = useGetCategory();
  console.log(value);
  console.log(value === "");

  return (
    <div className="py-4 text-sm">
      <div className="text-[#151B1E] text-xs pb-2">
        카테고리
        {<span className="text-[#F7744C]"> *</span>}
      </div>
      <Listbox value={value} onChange={onChange}>
        <Listbox.Button
          className="w-full h-12 rounded-[5px] px-2
        border border-beige-400 flex items-center justify-between "
        >
          <span className="text-beige-500">
            {value ? value : PLACE_HOLDER_TEXT}
          </span>
          <div className="w-5 h-5 flex items-center justify-center">
            <DropDown />
          </div>
        </Listbox.Button>
        <Listbox.Options className="mt-2.5 bg-beige-200 py-1 px-1.5 rounded-[5px] cursor-pointer">
          {data &&
            data.categoryList.map(({ code, name }) => (
              <Listbox.Option
                className="pl-4 flex items-center h-12 m-2 rounded-[5px] hover:bg-[#E1E8C9]"
                key={code}
                value={name}
              >
                {name}
              </Listbox.Option>
            ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};

export default SelectField;

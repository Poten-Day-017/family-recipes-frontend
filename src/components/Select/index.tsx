import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import DropDown from "@/assets/drop_down.svg";
// import { useForm, useFormContext } from "react-hook-form";

const CATEGORY = [
  {
    id: 1,
    name: "한식",
  },
  {
    id: 2,
    name: "중식",
  },
  {
    id: 3,
    name: "양식",
  },
  {
    id: 4,
    name: "일식",
  },
  {
    id: 5,
    name: "디저트",
  },
  {
    id: 6,
    name: "분식",
  },
];

const SelectField = () => {
  const [selectedCategory, setSelectedCategory] = useState("레시피 카테고리");

  // const {} = useFormContext();
  return (
    <div className="py-4">
      <div className="text-[#151B1E] text-xs font-bold pb-2">
        카테고리
        {<span className="text-[#F7744C]"> *</span>}
      </div>
      <Listbox value={selectedCategory} onChange={setSelectedCategory}>
        <Listbox.Button
          className="w-full h-12 rounded-[5px] px-2
        border border-beige-500 flex items-center justify-between"
        >
          <span className="text-beige-500">레시피 카테고리</span>
          <div className="w-5 h-5 flex items-center justify-center">
            <DropDown />
          </div>
        </Listbox.Button>
        <Listbox.Options className="mt-2.5 bg-beige py-1 px-1.5 rounded-[5px] cursor-pointer">
          {CATEGORY.map(({ id, name }) => (
            <Listbox.Option
              className="pl-4 flex items-center h-12 m-2 rounded-[5px] hover:bg-[#E1E8C9]"
              key={id}
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

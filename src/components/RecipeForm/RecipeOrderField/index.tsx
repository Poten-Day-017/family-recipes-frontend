import React, { FC, useEffect } from "react";
import AddListIcon from "@/assets/icons/add-list.svg";
import { useFieldArray, useFormContext } from "react-hook-form";
import { ACCEPTED_IMAGE_TYPES } from "@/components/RecipeForm/constants";
import CameraIcon from "@/assets/icons/camera.svg";
import usePreviewFile from "@/components/RecipeForm/usePreviewFile";
import Image from "next/image";
import RemoveImageIcon from "@/assets/icons/image-remove.svg";

interface RecipeOrderProps {
  index: number;
}

// NOTE: 컴포넌트 공통화
const RecipeOrderInput: FC<RecipeOrderProps> = ({ index }) => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();
  const [previewURL, setPreviewFileURL] = usePreviewFile();
  const PROCEDURE_IMAGE_NAME = `procedureList.${index}.imageUrl`;
  const PROCEDURE_DESCRIPTION_NAME = `procedureList.${index}.description`;

  const value = watch(PROCEDURE_IMAGE_NAME);

  useEffect(() => {
    console.log(errors[PROCEDURE_IMAGE_NAME]);
    if (value && !errors[PROCEDURE_IMAGE_NAME]) {
      setPreviewFileURL(value[0]);
    }
  }, [PROCEDURE_IMAGE_NAME, errors, setPreviewFileURL, value]);

  const handleRemoveImage = () => {
    setValue(PROCEDURE_IMAGE_NAME, "");
    setPreviewFileURL(null);
  };
  // NOTE: 컴포넌트 공통화
  return (
    <div className="w-full h-[126px] bg-beige-300 rounded-t-base border-b border-beige-400 flex items-center px-2.5">
      <div className="w-full flex flex-col mt-12">
        <span className="font-bold text-sm ">STEP {index + 1}</span>
        <textarea
          className="bg-transparent text-sm font-light outline-none"
          placeholder="조리 순서를 작성해주세요."
          {...register(PROCEDURE_DESCRIPTION_NAME)}
        />
      </div>
      {previewURL ? (
        <div className="shrink-0 w-[131px] h-[94px] border border-beige-600 rounded-base flex justify-center items-center">
          <div className="relative w-[60px] h-[60px]">
            <Image
              fill
              alt="조리 순서 사진"
              src={previewURL}
              className="border rounded-base border-main-black"
            />
            <RemoveImageIcon
              className="absolute top-[-11px] right-[-11px]"
              onClick={handleRemoveImage}
            />
          </div>
        </div>
      ) : (
        <>
          <input
            type="file"
            id={`image-${index}`}
            className="hidden"
            accept={ACCEPTED_IMAGE_TYPES.toString()}
            {...register(PROCEDURE_IMAGE_NAME)}
          />
          <label htmlFor={`image-${index}`}>
            <div className="shrink-0 w-[131px] h-[94px] bg-beige-200 border rounded-base border-beige-600 border-dashed flex flex-col items-center justify-center">
              <CameraIcon />
              <p className="text-[13px] text-beige-500 pt-2.5">사진 첨부 1장</p>
            </div>
          </label>
        </>
      )}
    </div>
  );
};

const RecipeOrderField = () => {
  const { control } = useFormContext();
  const { fields, append } = useFieldArray({
    control,
    name: "procedureList",
  });

  return (
    <div className="flex flex-col gap-[15px] items-center my-4">
      <div className="w-full">
        <div className="font-bold text-xs text-left w-full pb-2.5">
          레시피 순서
          <span className="text-[#F7744C]"> * </span>
        </div>
        <p className="text-xs text-left text-beige-500">
          조리순서와 사진을 첨부해주세요. (텍스트 필수, 사진 선택) <br />
          최소 step 1 이상 작성 필수
        </p>
      </div>
      {fields.map((item, index) => (
        <RecipeOrderInput key={item.id} index={index} />
      ))}
      <div
        className="pt-[6px] pb-[17px] border-b boarder-beige-400 w-full flex justify-center"
        onClick={append}
      >
        <AddListIcon />
      </div>
    </div>
  );
};

export default RecipeOrderField;

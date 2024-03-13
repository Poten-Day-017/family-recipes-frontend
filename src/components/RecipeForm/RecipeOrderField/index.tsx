import React, { ChangeEvent, FC } from "react";
import AddListIcon from "@/assets/icons/add-list.svg";
import {
  Control,
  FieldValues,
  useController,
  useFieldArray,
  useFormContext,
  UseFormRegister,
} from "react-hook-form";
import {
  ACCEPTED_IMAGE_TYPES,
  MAX_FILE_SIZE,
  VALIDATION_TEXT_MAX_FILE_SIZE,
} from "@/components/RecipeForm/constants";
import CameraIcon from "@/assets/icons/camera.svg";
import usePreviewFile from "@/components/RecipeForm/usePreviewFile";
import Image from "next/image";
import RemoveImageIcon from "@/assets/icons/image-remove.svg";

interface RecipeOrderProps {
  index: number;
  register: UseFormRegister<FieldValues>;
  control: Control<FieldValues>;
}

// NOTE: 컴포넌트 공통화
const RecipeOrderInput: FC<RecipeOrderProps> = ({ index }) => {
  const { control, register, setError, setValue } = useFormContext();
  const [previewURL, setPreviewFileURL] = usePreviewFile();
  const PROCEDURE_IMAGE_NAME = `procedureList.${index}.imageUrl`;

  const { field } = useController({
    name: `procedureList.${index}.imageUrl`,
    control,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      field.onChange(e);
      setPreviewFileURL(null);
      return;
    }

    if (!(file instanceof File)) {
      setError(PROCEDURE_IMAGE_NAME, { message: "Expected a file" });
      return;
    }
    if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
      setError(PROCEDURE_IMAGE_NAME, {
        message: ".jpg, .jpeg, .png and .webp files are accepted.",
      });
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setError(PROCEDURE_IMAGE_NAME, {
        message: VALIDATION_TEXT_MAX_FILE_SIZE,
      });
      return;
    }

    field.onChange(e);
    setPreviewFileURL(file);
  };

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
          {...register(`procedureList.${index}.description`)}
        />
      </div>
      {previewURL ? (
        <div className="shrink-0 w-[131px] h-[94px] border border-beige-600 rounded-base flex justify-center items-center">
          <div className="relative w-[60px] h-[60px] ">
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
            name={`image-${index}`}
            className="hidden"
            accept={ACCEPTED_IMAGE_TYPES.toString()}
            onChange={handleChange}
            value={field.value}
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
  const { control, register } = useFormContext();
  const { fields, append } = useFieldArray({
    control,
    name: "procedureList",
  });
  console.log(fields);

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
        <RecipeOrderInput
          key={item.id}
          register={register}
          index={index}
          control={control}
        />
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

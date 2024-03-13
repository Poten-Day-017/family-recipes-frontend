import type { ChangeEvent } from "react";

import { useController, useFormContext } from "react-hook-form";
import CameraIcon from "@/assets/icons/camera.svg";

import usePreviewFile from "@/components/RecipeForm/usePreviewFile";
import FilePReviewerField from "@/components/RecipeForm/FilePreviewer";
import {
  ACCEPTED_IMAGE_TYPES,
  MAX_FILE_SIZE,
} from "@/components/RecipeForm/constants";

const IMAGE_ID = "main-image";

const IMAGE_NAME = "cookingImage";

// NOTE: 파일 1장만 받도록 처리
const ImageField = () => {
  const { control, setError, setValue } = useFormContext();
  const { field, fieldState } = useController({
    name: IMAGE_NAME,
    control,
  });
  const [previewURL, setPreviewFileURL] = usePreviewFile();

  console.log(previewURL);
  console.log("field : ", field.value);
  console.log("field type: ", typeof field.value);
  console.log(fieldState.error);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      field.onChange(e);
      setPreviewFileURL(null);
      return;
    }

    if (!(file instanceof File)) {
      setError(IMAGE_NAME, { message: "Expected a file" });
      return;
    }
    if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
      setError(IMAGE_NAME, {
        message: ".jpg, .jpeg, .png and .webp files are accepted.",
      });
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setError(IMAGE_NAME, {
        message: "Max file size is 5MB.",
      });
      return;
    }

    field.onChange(e);
    setPreviewFileURL(file);
  };

  const handleRemoveImage = () => {
    setValue(IMAGE_NAME, "");
    setPreviewFileURL(null);
  };

  return (
    <div>
      <input
        type="file"
        id={IMAGE_ID}
        name={IMAGE_ID}
        className="hidden"
        accept={ACCEPTED_IMAGE_TYPES.toString()}
        onChange={handleChange}
        value={field.value}
      />
      <div className="text-[#151B1E] text-xs font-bold">
        대표 음식 사진
        <span className="text-[#F7744C]"> * 1장</span>
        {previewURL ? (
          <div
            className="h-[144px] w-full rounded-t-base
        bg-beige-300 border-b border-beige-600 flex justify-center items-center cursor-pointer"
          >
            <FilePReviewerField
              type="image"
              previewURL={previewURL}
              handleRemoveFile={handleRemoveImage}
            />
          </div>
        ) : (
          <label htmlFor={IMAGE_ID}>
            <div
              className="w-full h-[144px] my-4 flex flex-col justify-center
                items-center border border-beige-500 rounded-[5px] border-dashed
                cursor-pointer"
            >
              <CameraIcon className="cursor-pointer" />
              <p className="text-sm text-beige-500 pt-2.5 font-normal">
                레시피 대표 음식 사진을 올려주세요.
              </p>
            </div>
          </label>
        )}
      </div>
    </div>
  );
};

export default ImageField;

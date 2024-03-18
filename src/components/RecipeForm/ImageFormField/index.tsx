import { useFormContext } from "react-hook-form";
import CameraIcon from "@/assets/icons/camera.svg";

import usePreviewFile from "@/components/RecipeForm/usePreviewFile";
import FilePReviewerField from "@/components/RecipeForm/FilePreviewer";
import { ACCEPTED_IMAGE_TYPES } from "@/components/RecipeForm/constants";
import { useEffect } from "react";

const IMAGE_ID = "main-image";

const IMAGE_NAME = "cookingImage";

// NOTE: 파일 1장만 받도록 처리
const ImageField = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const [previewURL, setPreviewFileURL] = usePreviewFile();
  const value = watch(IMAGE_NAME);

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0];
  //
  //   if (!file) {
  //     field.onChange(e.target.files);
  //     setPreviewFileURL(null);
  //     return;
  //   }
  //
  //   if (!(file instanceof File)) {
  //     setError(IMAGE_NAME, { message: "Expected a file" });
  //     return;
  //   }
  //   if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
  //     setError(IMAGE_NAME, {
  //       message: ".jpg, .jpeg, .png and .webp files are accepted.",
  //     });
  //     return;
  //   }
  //
  //   if (file.size > MAX_FILE_SIZE) {
  //     setError(IMAGE_NAME, {
  //       message: VALIDATION_TEXT_MAX_FILE_SIZE,
  //     });
  //     return;
  //   }
  //
  //   field.onChange(e.target.files);
  //   setPreviewFileURL(file);
  // };
  //

  const handleRemoveImage = () => {
    setValue(IMAGE_NAME, "");
    setPreviewFileURL(null);
  };

  useEffect(() => {
    if (value && !errors[IMAGE_NAME]) {
      setPreviewFileURL(value[0]);
    }
  }, [errors, setPreviewFileURL, value]);

  return (
    <div>
      <input
        type="file"
        id={IMAGE_ID}
        className="hidden"
        accept={ACCEPTED_IMAGE_TYPES.toString()}
        {...register(IMAGE_NAME)}
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

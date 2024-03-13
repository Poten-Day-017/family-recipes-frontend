import React, { ChangeEvent } from "react";
import VideoIcon from "@/assets/icons/video.svg";
import usePreviewFile from "@/components/RecipeForm/usePreviewFile";
import FilePReviewerField from "@/components/RecipeForm/FilePreviewer";
import { useController, useFormContext } from "react-hook-form";
import {
  ACCEPTED_IMAGE_TYPES,
  MAX_FILE_SIZE,
} from "@/components/RecipeForm/constants";

const VIDEO_ID = "video";
const VIDEO_NAME = "cookingVideo";

const VideoField = () => {
  const { control, setValue, setError } = useFormContext();
  const { field, fieldState } = useController({
    name: "cookingVideo",
    control,
  });

  console.log(fieldState.error?.message);

  const [previewURL, setPreviewFileURL] = usePreviewFile();
  console.log(previewURL);

  const handleRemoveVideo = () => {
    setValue(VIDEO_NAME, "");
    setPreviewFileURL(null);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      field.onChange(e);
      setPreviewFileURL(null);
      return;
    }
    if (!(file instanceof File)) {
      setError(VIDEO_NAME, { message: "Expected a file" });
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setError(VIDEO_NAME, {
        message: "Max file size is 5MB.",
      });
      return;
    }

    setPreviewFileURL(file);
  };

  return (
    <div>
      {
        <input
          type="file"
          id={VIDEO_ID}
          name={VIDEO_ID}
          accept="video/mp4,video/mkv, video/x-m4v,video/*"
          className="hidden"
          onChange={handleChange}
        />
      }
      {previewURL ? (
        <FilePReviewerField
          type="video"
          previewURL={previewURL}
          handleRemoveFile={handleRemoveVideo}
        />
      ) : (
        <>
          <div className="text-[#151B1E] text-xs font-bold">
            음식 영상
            {<span className="text-beige-500">(선택 1개)</span>}
          </div>
          <div className="flex flex-col">
            <label htmlFor={VIDEO_ID}>
              <div
                className="w-full h-[144px]
          my-[15px]
          flex flex-col justify-center
          items-center border border-beige-500 rounded-[5px] border-dashed
          cursor-pointer"
              >
                <VideoIcon />
                <p className="text-sm text-beige-500 pt-2.5">
                  가족과 함께한 레시피 영상을 올려주세요.
                </p>
              </div>
            </label>
            <span className="text-beige-500 text-xs text-end">
              최대 1GB까지 업로드 가능
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default VideoField;

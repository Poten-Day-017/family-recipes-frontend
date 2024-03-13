import type { FC } from "react";
import Image from "next/image";
import ImageRemoveIcon from "@/assets/icons/image-remove.svg";

interface Props {
  type: "image" | "video";
  previewURL: string;
  handleRemoveFile: () => void;
}

const FilePReviewerField: FC<Props> = ({
  type,
  previewURL,
  handleRemoveFile,
}) => {
  console.log("previewURL: ", previewURL);

  return (
    <div
      className="h-[144px] w-full rounded-t-base
        bg-beige-300 border-b border-beige-600 flex justify-center items-center cursor-pointer"
    >
      <div
        className={` ${type === "video" ? "aspect-video" : "aspect-square"}  h-[100px] relative`}
      >
        {type === "image" && (
          <Image
            src={previewURL}
            alt="대표 음식 사진"
            fill
            className="rounded-base border border-main-black object-cover"
          />
        )}
        {type === "video" && (
          <video className="rounded-base border border-main-black object-cover">
            <source src={previewURL} />
          </video>
        )}
        <ImageRemoveIcon
          className="absolute top-[-11px] right-[-11px]"
          onClick={handleRemoveFile}
        />
      </div>
    </div>
  );
};

export default FilePReviewerField;

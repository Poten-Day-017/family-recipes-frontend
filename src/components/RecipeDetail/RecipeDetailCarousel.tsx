"use client";

import type { FC } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface SliderPaginationProps {
  current: number;
  total: number;
}

const SliderPagination: FC<SliderPaginationProps> = ({
  current,
  total,
}: SliderPaginationProps) => {
  return (
    <div className="absolute rounded-full w-[34px] h-[19px] right-2.5 bottom-2.5 bg-main-black opacity-80 flex justify-between text-2xs px-1.5 items-center">
      <span className="text-white">{current}</span>
      <span className="text-beige-500">|</span>
      <span className="text-beige-500">{total}</span>
    </div>
  );
};

interface Props {
  cookingImageUrl: string;
  cookingVideoUrl: string;
}
const RecipeDetailCarousel: FC<Props> = ({
  cookingImageUrl,
  cookingVideoUrl,
}) => {
  console.log(cookingImageUrl, cookingVideoUrl);

  const settings = {
    dot: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (!cookingVideoUrl) {
    return (
      <div className="relative w-full aspect-[328/220] rounded-base overflow-hidden border border-main-black mt-[15px] mb-[24px]">
        <Image
          src={cookingImageUrl}
          alt={"main image"}
          fill
          className="object-cover"
        />
        <SliderPagination current={1} total={1} />
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-[328/220]">
      <Slider {...settings}>
        <div className="relative w-full aspect-[328/220] rounded-base overflow-hidden border border-main-black mt-[15px] mb-[24px]">
          <Image
            src={cookingImageUrl}
            alt={"main image"}
            fill
            className="object-cover"
          />
          <SliderPagination current={1} total={2} />
        </div>
        <div className="relative w-full aspect-[328/220] rounded-base overflow-hidden border border-main-black mt-[15px] mb-[24px]">
          <video
            controls
            src={cookingVideoUrl}
            className="object-cover w-full aspect-[328/220]"
          />
          <SliderPagination current={2} total={2} />
        </div>
      </Slider>
    </div>
  );
};

export default RecipeDetailCarousel;

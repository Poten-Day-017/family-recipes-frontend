"use client";

import * as z from "zod";
import { FormProvider, useForm } from "react-hook-form";
import SelectField from "@/components/Select";
import PrivateToggle from "./PrivateToggleField";
import ImageField from "@/components/RecipeForm/ImageFormField";
import VideoField from "@/components/RecipeForm/VideoFormField";
import { zodResolver } from "@hookform/resolvers/zod";

import type { Ingredient, Procedure } from "@/fetcher/types";
import TitleTextField from "@/components/RecipeForm/TitleTextField";
import OriginTextField from "@/components/RecipeForm/OriginTextField";
import RecipeCounterField from "./RecipeCounterField";
import IngredientField from "@/components/RecipeForm/IngredientField";
import HomeIngredientField from "@/components/RecipeForm/HomeIngredientField";
import RecipeOrderField from "@/components/RecipeForm/RecipeOrderField";
import Button from "@/components/common/Button";

import {
  EMPTY_STRING,
  MAX_FILE_SIZE,
  VALIDATION_TEXT_CATEGORY,
  VALIDATION_TEXT_MAX_FILE_SIZE,
  VALIDATION_TEXT_ORIGIN,
  VALIDATION_TEXT_TITLE,
} from "@/components/RecipeForm/constants";
import usePostNewRecipe from "@/queries/mutation/usePostNewRecipe";
import { useRouter } from "next/navigation";

export interface FormFieldsType {
  isOpen: boolean; //: 공개 비공개 여부
  title: string; // 제목: 필수 입력, 최소 2자, 최대 30자
  origin: string; //주인: 필수 입력, 최대 30자
  content: string; // 소개: 최소 2자, 최대 30자
  categoryCode: string; // 카태고리 드롭다운
  capacity: number; // 레시피
  episode: string;
  ingredientList: Ingredient[];
  secretIngredientList: Ingredient[];
  procedureList: {
    description: string;
    imageUrl?: File[] | string;
  }[];
  cookingImage: File[] | string; //  이미지 없을 경우 -> File | 이미지 존재 -> string
  cookingVideo: File[] | string; // 동영상 없을 경우 -> File | 이미지 존재 -> string
}

const formSchema = z.object({
  isOpen: z.boolean(),
  title: z
    .string()
    .min(2, { message: VALIDATION_TEXT_TITLE })
    .max(30, { message: VALIDATION_TEXT_TITLE }),
  origin: z.string().min(1, { message: VALIDATION_TEXT_ORIGIN }),
  categoryCode: z.string().min(1, { message: VALIDATION_TEXT_CATEGORY }),
  capacity: z.number().min(1),

  // NOTE: 파일
  cookingImage: z.union([
    z.string().min(1),
    z
      .any()
      .refine((files) => files?.length > 0, "Image is required.")
      .refine((files) => files?.[0] instanceof File, "it is not a File")
      // .refine(
      //   (files) => files && "size" in files?.[0],
      //   "File size must  has size",
      // )
      .refine(
        (files) => files?.[0]?.size < MAX_FILE_SIZE,
        VALIDATION_TEXT_MAX_FILE_SIZE,
      ),
  ]),
  cookingVideo: z.union([
    z.string().optional(),
    z
      .any()
      .refine((files) => files?.length > 0, "Image is required.")
      .refine((files) => files?.[0] instanceof File, "it is not a File")
      .refine((files) => !!files?.[0]?.size, "File size must has size")
      .refine(
        (files) => files?.[0]?.size < MAX_FILE_SIZE,
        VALIDATION_TEXT_MAX_FILE_SIZE,
      )
      .optional(),
  ]),
  secretIngredientList: z
    .array(
      z.object({
        name: z.string(),
        amount: z.string(),
      }),
    )
    .optional(),

  ingredientList: z
    .array(
      z.object({
        name: z.string(),
        amount: z.string(),
      }),
    )
    .min(1),

  // TODO: zod로 둘 중 하나 존재 시 통과 로직 필요
  procedureList: z
    .array(
      z.object({
        description: z.string(),
        imageUrl: z.union([
          z.string().optional(),
          z
            .any()
            .refine(
              (files) => files || files?.[0] instanceof File,
              "it is not a File",
            )
            .refine(
              (files) => files || files?.[0]?.size < MAX_FILE_SIZE,
              VALIDATION_TEXT_MAX_FILE_SIZE,
            )
            .optional(),
        ]),
      }),
    )
    .min(1),
});

const RecipeForm = () => {
  const postMutation = usePostNewRecipe();
  const methods = useForm<FormFieldsType>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
    defaultValues: {
      isOpen: true,
      title: EMPTY_STRING,
      origin: EMPTY_STRING,
      categoryCode: EMPTY_STRING,
      capacity: 1,
      // episode
      ingredientList: [
        {
          name: "",
          amount: "",
        },
        {
          name: "",
          amount: "",
        },
      ],
      secretIngredientList: [
        {
          name: "",
          amount: "",
        },
        {
          name: "",
          amount: "",
        },
      ],

      cookingImage: "",
      cookingVideo: "",
      procedureList: [
        {
          description: "",
        },
        {
          description: "",
        },
      ],
    },
  });

  const {
    formState: { isValid, errors },
    handleSubmit,
  } = methods;

  console.log("error!!: ", errors);
  console.log(isValid);
  const router = useRouter();

  const onSubmit = (data: FormFieldsType) => {
    console.log(data);

    const newRecipeBody = {
      recipeCreateRequest: {
        title: data.title,
        origin: data.origin,
        category: data.categoryCode,
        isOpen: data.isOpen,
        ingredientList: data.ingredientList.map((item, idx) => {
          return { ...item, order: idx + 1 };
        }),
        secretIngredientList: data.secretIngredientList.map((item, idx) => {
          return { ...item, order: idx + 1 };
        }),
        procedureList: data.procedureList.map(({ description }, idx) => {
          return { description, order: idx + 1 };
        }),
        content: "",
        capacity: data.capacity,
      },
      cookingImage:
        data.cookingImage?.[0] instanceof File
          ? (data.cookingImage[0] as File)
          : data.cookingImage,
      cookingVideo:
        data.cookingVideo?.[0] instanceof File
          ? data.cookingVideo[0]
          : data.cookingVideo,
      procedureImageList: data.procedureList.map(({ imageUrl }) =>
        imageUrl?.[0] instanceof File ? imageUrl[0] : imageUrl,
      ),
    };

    // newRecipeBody.cookingImage = newRecipeBody.cookingImage as File | string;
    // newRecipeBody.cookingVideo = newRecipeBody.cookingVideo as File | string;

    postMutation.mutate(newRecipeBody, {
      onSuccess: (data) => {
        console.log(data);
        router.push("/recipes");
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  return (
    <div className="h-full">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <PrivateToggle />
          <TitleTextField />
          <OriginTextField />
          <SelectField />
          <ImageField />
          <VideoField />
          <RecipeCounterField />
          <IngredientField />
          <HomeIngredientField />
          <RecipeOrderField />
          <div className="h-[87px] w-full"></div>
          <div className="fixed bottom-0 left-[0px] pb-[15px] w-full max-w-[calc(768px-32px)] bg-beige-200 px-4 border-t border-beige-400">
            <Button color="orange-fill" type="submit" disabled={!isValid}>
              작성완료
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default RecipeForm;

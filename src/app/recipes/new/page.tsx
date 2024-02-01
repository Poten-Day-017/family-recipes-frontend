import React from "react";
import { Metadata } from "next";
import Input from "@/components/Input";

export const metadata: Metadata = {
  title: "...",
  description: "...",
};

const Recipe = () => {
  return (
    <div>
      <Input
        title="레시피 제목"
        required
        explanation="최소 2자/ 최대 30자"
        placeholder="레시피 제목을 입력해주세요."
        error="최소 2자이상 제목을 작성해주세요."
      />
    </div>
  );
};

export default Recipe;

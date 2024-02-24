"use client";

import { forwardRef } from "react";

interface Props {
  type: "default" | "";
}
const Button = forwardRef<HTMLButtonElement, Props>(({ type }) => {
  return (
    <button className="flex h-[50px] w-full justify-center items-center mt-4 rounded-[5px] border border-main-orange text-main-orange font-bold text-sm"></button>
  );
});

Button.displayName = "Button";

export default Button;

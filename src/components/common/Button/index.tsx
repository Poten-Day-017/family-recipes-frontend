"use client";

import type {
  ButtonHTMLAttributes,
  HTMLProps,
  PropsWithChildren,
  ReactNode,
} from "react";
import { forwardRef } from "react";

interface Props extends HTMLProps<HTMLButtonElement> {
  type?: "default";
}
const Button = forwardRef<HTMLButtonElement, PropsWithChildren<Props>>(
  ({ type, children, ...props }, ref) => {
    return (
      <button
        className="flex h-[50px] w-full justify-center items-center mt-4 rounded-[5px] border border-main-orange text-main-orange font-bold text-sm"
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;

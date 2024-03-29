"use client";

import type {
  ButtonHTMLAttributes,
  HTMLProps,
  PropsWithChildren,
  ReactNode,
} from "react";
import { forwardRef } from "react";

const sizeOptions = {
  full: "w-full h-[55px]",
  sm: "w-[120px] h-[44px]",
};

const colorOptions = {
  "orange-stroke": "border border-main-orange text-main-orange",
  disabled: "bg-beige-300 text-beige-500",
  "orange-fill": "bg-main-orange text-white",
  "black-stroke": "border border-black text-main-black",
};

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: keyof typeof sizeOptions;
  color?: keyof typeof colorOptions;
}

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<Props>>(
  (
    {
      size = "full",
      color = "orange-stroke",
      children,
      disabled,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        className={`flex h-[50px] w-full justify-center items-center mt-4 rounded-[5px] transition-all font-semibold
        ${size ? sizeOptions[size] : sizeOptions["full"]}
        ${disabled ? colorOptions["disabled"] : color ? colorOptions[color] : colorOptions["orange-stroke"]} ${className}`}
        ref={ref}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;

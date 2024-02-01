import React, { forwardRef, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  required?: boolean;
  title?: string;
  explanation?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ required, title, explanation, error, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        {title && (
          <div className="text-[#151B1E] text-xs font-bold pb-2">
            레시피 제목
            {required && <span className="text-[#F7744C]"> *</span>}
          </div>
        )}
        <input
          type="text"
          className={`w-full
          py-[1.25rem]
          px-[0.5rem]
          bg-[#E1E2DE]
           rounded-tr-[5px]
           border-b 
           ${error ? "border-b-2 border-[#EB200D]" : "border-[#BEC0BB]"}
           placeholder:text-[#9FA19D]
           text-[#222320]
           outline-none
      `}
          ref={ref}
          {...props}
        />
        {explanation && (
          <span className="text-[#9FA19D] text-xs font-medium self-end pt-3">
            {explanation}
          </span>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;

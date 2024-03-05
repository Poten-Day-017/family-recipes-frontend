import React, { forwardRef, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  required?: boolean;
  title?: string;
  explanation?: string;
  error?: string | null;
}

const InputText = forwardRef<HTMLInputElement, Props>(
  ({ required, title, explanation, error, ...props }, ref) => {
    return (
      <div className="flex flex-col pt-4">
        {title && (
          <div className="text-[#151B1E] text-xs font-bold pb-2">
            {title}
            {required && <span className="text-[#F7744C]"> *</span>}
          </div>
        )}
        <input
          type="text"
          className={`w-full
          h-[50px]
          bg-beige-300
           pl-1
           rounded-t-base
           border-b 
           ${error ? "border-b-2 border-main-error" : "border-beige-400"}
           placeholder:text-beige-500
           text-main-black
           text-sm
           outline-none
        
      `}
          ref={ref}
          {...props}
        />
        {error && (
          <span className="text-main-error text-xs font-medium self-start pt-3">
            {error}
          </span>
        )}
        {explanation && !error && (
          <span className="text-[#9FA19D] text-xs font-medium self-end pt-3">
            {explanation}
          </span>
        )}
      </div>
    );
  },
);

InputText.displayName = "InputText";

export default InputText;

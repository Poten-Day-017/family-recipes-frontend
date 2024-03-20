import React, { FC } from "react";

interface Props {
  title: string;
  description?: string;
  LeftComponent?: React.ReactNode;
  RightComponent?: React.ReactNode;
}
const Modal: FC<Props> = ({
  title,
  description,
  LeftComponent,
  RightComponent,
}) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="py-[30px] px-[17px] h-[182px] rounded-base bg-beige-200 border border-main-black">
        <p className="text-bold">{title}</p>
        <p className="text-xs text-beige-700 mt-[12px]">{description}</p>
        <div className="flex gap-2.5">
          {LeftComponent}
          {RightComponent}
        </div>
      </div>
    </div>
  );
};

export default Modal;

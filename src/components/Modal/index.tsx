import type {
  FC,
  PropsWithChildren,
  ReactElement,
  Dispatch,
  SetStateAction,
} from "react";
import { createContext, useState } from "react";

const ModalsContext = createContext<ReactElement[]>([]);
const DispatchModalContext = createContext<
  Dispatch<SetStateAction<ReactElement[]>>
>(() => {});
const ModalContext: FC<PropsWithChildren> = ({ children }) => {
  const [modals, setModals] = useState<ReactElement[]>([]);
  const handleClose = () => {};

  return (
    <DispatchModalContext.Provider value={setModals}>
      <ModalsContext.Provider value={modals}>{children}</ModalsContext.Provider>
    </DispatchModalContext.Provider>
  );
};

export default ModalContext;

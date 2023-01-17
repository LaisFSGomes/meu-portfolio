import React from "react";
import { ButtonWrapper } from "./Button.styles";
import { ModeContext } from "contexts";
interface ButtonProps {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  const { mode } = React.useContext(ModeContext);
  return <ButtonWrapper className={mode}>{children}</ButtonWrapper>;
};

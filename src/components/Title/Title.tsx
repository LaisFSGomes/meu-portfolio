import React from "react";
import { TitleTypography } from "./Title.styles";
import { ModeContext } from "contexts/DarkLight";

interface TitleProps {
  className?: string;
  children: React.ReactNode;
}
export const Title: React.FC<TitleProps> = ({ className, children }) => {
  const { mode } = React.useContext(ModeContext);
  return <TitleTypography className={`${className} ${mode}`}>{children}</TitleTypography>;
};

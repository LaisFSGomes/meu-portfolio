import React from "react";
import { TitleTypography } from "./Title.styles";

interface TitleProps {
  className?: string;
  children: React.ReactNode;
}
export const Title: React.FC<TitleProps> = ({ className, children }) => {
  return <TitleTypography className={className}>{children}</TitleTypography>;
};

import React from "react";
import { ButtonWrapper } from "./Button.styles";

interface ButtonProps {
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({children}) => {
    return (
        <ButtonWrapper>
            {children}
        </ButtonWrapper>
    );
};
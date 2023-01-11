import React from "react";
import { FooterWrapper, FooterGit, FooterTitle } from "./Footer.styles";

export const Footer: React.FC = () => {
    return (
        <FooterWrapper>
            <FooterTitle>
                Todos os direitos reservados
            </FooterTitle>
            <FooterGit>
                @LaisFSGomes
            </FooterGit>
        </FooterWrapper>
    );
};
import React from "react";
import { FooterWrapper, FooterGit, FooterTitle } from "./Footer.styles";
import { ModeContext } from "contexts/DarkLight";

export const Footer: React.FC = () => {
    const { mode } = React.useContext(ModeContext);
    return (
        <FooterWrapper className= {mode} >
            <FooterTitle className= {mode} >
                Todos os direitos reservados
            </FooterTitle>
            <FooterGit className= {mode} >
                @LaisFSGomes
            </FooterGit>
        </FooterWrapper>
    );
};
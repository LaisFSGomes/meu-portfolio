import { Button } from "components/Button";
import React from "react";
import {
  ActionsWrapper,
  HeaderWrapper,
  Image,
  Job,
  Name,
  PersonalWrapper,
  Title,
} from "./Header.styles";

const imagem = require("assets/images/minhafoto.png");

export const Header: React.FC = () => {
  return (
    <HeaderWrapper id="cv">
      <PersonalWrapper>
        <PersonalWrapper>
          <Title>Oi, eu sou a</Title>
          <Name>Lais Gomes</Name>
          <Job>Desenvolvedora Front-End</Job>
          <ActionsWrapper>
            <Button>meu currículo</Button>
            <Button>entrar em contato</Button>
          </ActionsWrapper>
        </PersonalWrapper>
      </PersonalWrapper>
      <Image src={imagem} alt="Lais" />
    </HeaderWrapper>
  );
};

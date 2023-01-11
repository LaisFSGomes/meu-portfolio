import { Button } from "components/Button";
import React from "react";
import {
  ActionsWrapper,
  HeaderDraw,
  HeaderWrapper,
  Image,
  Job,
  Name,
  PersonalWrapper,
  Title,
} from "./Header.styles";

const imagem = require("assets/images/minhafoto.png");
const headerDraw = require("assets/icons/draw/Vectordrawing.png");

export const Header: React.FC = () => {
  return (
    <HeaderWrapper id="cv">
      <PersonalWrapper> 
        <HeaderDraw  />
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

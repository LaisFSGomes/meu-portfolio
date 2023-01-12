import { Button } from "components/Button";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
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

export const Header: React.FC = () => {
  React.useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <HeaderWrapper id="cv">
      <HeaderDraw  />
        <PersonalWrapper data-aos = "fade-right">
          <Title>Oi, eu sou a</Title>
          <Name>Lais Gomes</Name>
          <Job>Desenvolvedora Front-End</Job>
          <ActionsWrapper>
            <Button>meu currículo</Button>
            <Button>entrar em contato</Button>
          </ActionsWrapper>
        </PersonalWrapper>
      <Image data-aos = "fade-left" src={imagem} alt="Lais" />
    </HeaderWrapper>
  );
};

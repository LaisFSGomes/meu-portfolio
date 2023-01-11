import React from "react";
import { AboutText, AboutTitle, AboutWrapper } from "./About.styles";

export const About: React.FC = () => {
  return (
    <AboutWrapper id="about">
      <AboutTitle>Sobre Mim</AboutTitle>
      <AboutText>
        Atualmente eu sou uma estudante do último semestre de engenharia de computação na
        Universidade Federal do Ceará em Sobral. Tenho experiência em
        tecnologias de front-end como React.JS, Typescript, CSS, Angular, dentre outras.
      </AboutText>
    </AboutWrapper>
  );
};

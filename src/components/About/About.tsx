import { Title } from "components/Title";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { AboutDraw, AboutText, AboutWrapper, Container } from "./About.styles";

export const About: React.FC = () => {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <AboutWrapper id="about">
      <AboutDraw />
      <Container >
        <Title>Sobre Mim</Title>
        <AboutText data-aos="fade-up">
          Atualmente eu sou uma estudante do último semestre de engenharia de
          computação na Universidade Federal do Ceará em Sobral. Tenho
          experiência em tecnologias de front-end como React.JS, Typescript,
          CSS, Angular, dentre outras.
        </AboutText>
      </Container>
    </AboutWrapper>
  );
};

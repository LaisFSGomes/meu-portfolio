import { Title } from "components/Title";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { AboutDrawDark, AboutDrawLight, AboutText, AboutWrapper, Container } from "./About.styles";
import { ModeContext } from "contexts/DarkLight";

export const About: React.FC = () => {
  const { mode } = React.useContext(ModeContext);
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <AboutWrapper className = {mode} id="about">
      {mode === "dark" ? <AboutDrawDark /> : <AboutDrawLight />}
      <Container >
        <Title>Sobre Mim</Title>
        <AboutText className = {mode} data-aos="fade-up">
          Atualmente eu sou uma estudante do último semestre de engenharia de
          computação na Universidade Federal do Ceará em Sobral. Tenho
          experiência em tecnologias de front-end como React.JS, Typescript,
          CSS, Angular, dentre outras.
        </AboutText>
      </Container>
    </AboutWrapper>
  );
};

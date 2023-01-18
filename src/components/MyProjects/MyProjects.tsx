import React from "react";
import { Swiper, Title } from "components";
import { MyProjectsWrapper } from "./MyProjects.styles";
import { ModeContext } from "contexts";
import fakemart from "assets/images/projects/fakemart.png";
import gitsearch from "assets/images/projects/gitsearch.png";
import memoteca from "assets/images/projects/memoteca.png";
import passwordgenerator from "assets/images/projects/passwordgenerator.png";
import riverraid from "assets/images/projects/riverraid.png";
import spotfy from "assets/images/projects/spotfy.png";

export const MyProjects: React.FC = () => {
  const items = [
    {
      src: fakemart,  
      alt: "FakeMart",
      title: "FakeMart: uma loja virtual fictícia feita em React",
      link: "https://github.com/LaisFSGomes/fakemart",
    },
    {
      src: gitsearch,
      alt: "GitSearch",
      title:
        "GitSearch: uma aplicação de busca de repositórios do GitHub feita em Angular",
      link: "https://github.com/LaisFSGomes/git-search-angular",
    },
    {
      src: memoteca,
      alt: "Memoteca",
      title:
        "Memoteca: escreva suas anotações e lembretes em um caderno virtual feito em Angular",
      link: "https://github.com/LaisFSGomes/memoteca",
    },
    {
      src: passwordgenerator,
      alt: "Password Generator",
      title:
        "Gerador de Senhas: uma aplicação para gerar senhas aleatórias feita em React",
      link: "https://github.com/LaisFSGomes/random-password-generator",
    },
    {
      src: riverraid,
      alt: "River Raid",
      title: "River Raid: um jogo de nave feito em JavaScript, HTML e CSS",
      link: "https://github.com/LaisFSGomes/river-raid",
    },
    {
      src: spotfy,
      alt: "Spotify",
      title:
        "Spotify: um clone da página inicial do Spotify feito em CSS e HTML",
      link: "https://github.com/LaisFSGomes/spotify",
    },
  ];

  const { mode } = React.useContext(ModeContext);

  return (
    <MyProjectsWrapper className={mode} id="projects">
      <Title>Meus Projetos</Title>
      <Swiper items={items} />
    </MyProjectsWrapper>
  );
};

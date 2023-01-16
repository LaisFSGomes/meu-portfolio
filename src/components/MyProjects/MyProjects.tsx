import { Swiper, Title } from "components";
import React from "react";
import { MyProjectsWrapper } from "./MyProjects.styles";

export const MyProjects: React.FC = () => {
  const items = [
    {
      src: require("assets/images/projects/fakemart.png"),
      alt: "FakeMart",
      title: "FakeMart: uma loja virtual fictícia feita em React",
      link: "https://github.com/LaisFSGomes/fakemart",
    },
    {
      src: require("assets/images/projects/gitsearch.png"),
      alt: "GitSearch",
      title:
        "GitSearch: uma aplicação de busca de repositórios do GitHub feita em Angular",
      link: "https://github.com/LaisFSGomes/git-search-angular",
    },
    {
      src: require("assets/images/projects/memoteca.png"),
      alt: "Memoteca",
      title:
        "Memoteca: escreva suas anotações e lembretes em um caderno virtual feito em Angular",
      link: "https://github.com/LaisFSGomes/memoteca",
    },
    {
      src: require("assets/images/projects/passwordgenerator.png"),
      alt: "Password Generator",
      title:
        "Gerador de Senhas: uma aplicação para gerar senhas aleatórias feita em React",
      link: "https://github.com/LaisFSGomes/fakemart",
    },
    {
      src: require("assets/images/projects/riverraid.png"),
      alt: "River Raid",
      title: "River Raid: um jogo de nave feito em JavaScript, HTML e CSS",
      link: "https://github.com/LaisFSGomes/fakemart",
    },
    {
      src: require("assets/images/projects/spotfy.png"),
      alt: "Spotify",
      title:
        "Spotify: um clone da página inicial do Spotify feito em CSS e HTML",
      link: "https://github.com/LaisFSGomes/fakemart",
    },
  ];

  return (
    <MyProjectsWrapper>
      <Title>Projetos</Title>
      <Swiper items={items} />
    </MyProjectsWrapper>
  );
};

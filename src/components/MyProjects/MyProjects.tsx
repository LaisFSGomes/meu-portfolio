import { Swiper, Title } from "components";
import React from "react";
import { MyProjectsWrapper } from "./MyProjects.styles";

export const MyProjects: React.FC = () => {
  const items = [
    {
      src: require("assets/images/projects/fakemart.png"),
      alt: "FakeMart",
    },
    {
      src: require("assets/images/projects/gitsearch.png"),
      alt: "GitSearch",
    },
    {
      src: require("assets/images/projects/memoteca.png"),
      alt: "Memoteca",
    },
    {
      src: require("assets/images/projects/passwordgenerator.png"),
      alt: "Password Generator",
    },
    {
      src: require("assets/images/projects/riverraid.png"),
      alt: "River Raid",
    },
    {
      src: require("assets/images/projects/spotfy.png"),
      alt: "Spotfy",
    },
  ];
  return (
    <MyProjectsWrapper>
      <Title>Projetos</Title>
      <Swiper items={items}/>
    </MyProjectsWrapper>
  );
};

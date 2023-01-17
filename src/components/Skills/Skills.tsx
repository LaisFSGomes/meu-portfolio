import { SkillCard } from "components/SkillCard";
import { Title } from "components/Title";
import React from "react";
import { Container, SkillsWrapper } from "./Skills.styles";
import {
  angular,
  bootstrap,
  css,
  figma,
  git,
  github,
  html,
  jquery,
  js,
  linux,
  mui,
  mysql,
  nextjs,
  react,
  regex,
  sass,
  styledcomponent,
  ts,
} from "assets/icons/skills";
import Aos from "aos";
import "aos/dist/aos.css";
import { ModeContext } from "contexts/DarkLight";
export const Skills: React.FC = () => {
  const { mode } = React.useContext(ModeContext);
  React.useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <SkillsWrapper className= {mode} id = "skills">
      <Title>Habilidades</Title>
      <Container data-aos = "fade-up">
        <SkillCard title="React" image={react} />
        <SkillCard title="NextJS" image={nextjs} />
        <SkillCard title="Angular" image={angular} />
        <SkillCard title="Material UI" image={mui} />
        <SkillCard title="Styled Components" image={styledcomponent} />
        <SkillCard title="Sass" image={sass} />
        <SkillCard title="CSS" image={css} />
        <SkillCard title="Bootstrap" image={bootstrap} />
        <SkillCard title="Figma" image={figma} />
        <SkillCard title="Git" image={git} />
        <SkillCard title="GitHub" image={github} />
        <SkillCard title="HTML" image={html} />
        <SkillCard title="jQuery" image={jquery} />
        <SkillCard title="Javascript" image={js} />
        <SkillCard title="Linux" image={linux} />
        <SkillCard title="MySQL" image={mysql} />
        <SkillCard title="Regex" image={regex} />
        <SkillCard title="Typescript" image={ts} />
      </Container>
    </SkillsWrapper>
  );
};

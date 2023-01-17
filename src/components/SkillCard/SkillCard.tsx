import React from "react";
import { SkillWrapper, SkillImage, SkillTitle } from "./SkillCard.styles";
import { ModeContext } from "contexts/DarkLight";

interface SkillCardProps {
  title: string;
  image: string;
}
export const SkillCard: React.FC<SkillCardProps> = ({ title, image }) => {
  const { mode } = React.useContext(ModeContext);
  return (
    <SkillWrapper className= {mode} >
      <SkillImage src={image} alt={title} />
      <SkillTitle className= {mode} >{title}</SkillTitle>
    </SkillWrapper>
  );
};

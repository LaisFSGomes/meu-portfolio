import React from "react";
import { SkillWrapper, SkillImage, SkillTitle } from "./SkillCard.styles";

interface SkillCardProps {
  title: string;
  image: string;
}
export const SkillCard: React.FC<SkillCardProps> = ({ title, image }) => {
  return (
    <SkillWrapper>
      <SkillImage src={image} alt={title} />
      <SkillTitle>{title}</SkillTitle>
    </SkillWrapper>
  );
};

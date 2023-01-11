import React from "react";
import { ContactMeWrapper, Text } from "./ContactIcon.styles";

interface ContactIconProps {
  icon: React.ReactNode;
  link?: string;
  text: string;
}

export const ContactIcon: React.FC<ContactIconProps> = ({
  icon,
  link,
  text,
}) => {
  return (
    <ContactMeWrapper>
      {icon}
      <Text> {text} </Text>
    </ContactMeWrapper>
  );
};

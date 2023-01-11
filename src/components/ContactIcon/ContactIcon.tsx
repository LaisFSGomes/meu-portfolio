import React from "react";
import { ContactMeWrapper, Text } from "./ContactIcon.styles";
interface ContactIconProps {
  icon: React.ReactNode;
  link: string;
  text: string;
}

export const ContactIcon: React.FC<ContactIconProps> = ({
  icon,
  link,
  text,
}) => {
    const onContactClick = () => {
        window.open(link, "_blank");
    }
  return (
    <ContactMeWrapper onClick={onContactClick}>
      {icon}
      <Text> {text} </Text>
    </ContactMeWrapper>
  );
};

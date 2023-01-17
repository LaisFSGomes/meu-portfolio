import React from "react";
import { ContactMeWrapperDark, ContactMeWrapperLight, Text } from "./ContactIcon.styles";
import { ModeContext } from "contexts/DarkLight";
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
  const { mode } = React.useContext(ModeContext);
  const onContactClick = () => {
    window.open(link, "_blank");
  };
  return (
    // <ContactMeWrapper onClick={onContactClick}>
    //   {icon}
    //   <Text> {text} </Text>
    // </ContactMeWrapper>
    
    <React.Fragment>
      {mode === "dark" ? (
        <ContactMeWrapperDark onClick={onContactClick}>
          {icon}
          <Text> {text} </Text>
        </ContactMeWrapperDark>
      ) : (
        <ContactMeWrapperLight onClick={onContactClick}>
          {icon}
          <Text className= {mode} > {text} </Text>
        </ContactMeWrapperLight>
      )}
    </React.Fragment>
  );
};

import { ContactIcon } from "components/ContactIcon";
import { Title } from "components/Title";
import React from "react";
import { ContactMeWrapper, Container } from "./ContactMe.styles";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export const ContactMe: React.FC = () => {
  return (
    <ContactMeWrapper>
      <Title>Onde me Encontrar</Title>
      <Container>
        <ContactIcon
          icon={<EmailOutlinedIcon fontSize="large" />}
          link=""
          text="laisfsgomes@gmail.com"
        />
        <ContactIcon
          icon={<GitHubIcon fontSize="large" />}
          link=""
          text="@LaisFSGomes"
        />
        <ContactIcon
          icon={<LinkedInIcon fontSize="large" />}
          link=""
          text="/in/laisfsgomes"
        />
        <ContactIcon
          icon={<InstagramIcon fontSize="large" />}
          link=""
          text="@laisfsg"
        />
      </Container>
    </ContactMeWrapper>
  );
};

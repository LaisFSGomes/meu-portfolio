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
          link="mailto:laisfsgomes@gmail.com"
          text="laisfsgomes@gmail.com"
        />
        <ContactIcon
          icon={<GitHubIcon fontSize="large" />}
          link="https://github.com/LaisFSGomes"
          text="@LaisFSGomes"
        />
        <ContactIcon
          icon={<LinkedInIcon fontSize="large" />}
          link="https://www.linkedin.com/in/laisfsgomes/"
          text="/in/laisfsgomes"
        />
        <ContactIcon
          icon={<InstagramIcon fontSize="large" />}
          link="https://www.instagram.com/laisfsg_"
          text="@laisfsg_"
        />
      </Container>
    </ContactMeWrapper>
  );
};

import { ContactIcon } from "components";
import { Title } from "components/Title";
import React from "react";
import { ContactMeWrapper, Container } from "./ContactMe.styles";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import Aos from "aos";
import "aos/dist/aos.css";
import { ModeContext } from "contexts/DarkLight";

export const ContactMe: React.FC = () => {
  const { mode } = React.useContext(ModeContext);
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])
  return (
    <ContactMeWrapper className= {mode} id="social" >
      <Title>Onde me Encontrar</Title>
      <Container data-aos = "zoom-in">
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

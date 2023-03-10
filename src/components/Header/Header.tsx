import React from "react";
import { Button } from "components";
import Aos from "aos";
import "aos/dist/aos.css";
import { ModeContext } from "contexts";
import {
  ActionsWrapper,
  HeaderDrawDark,
  HeaderDrawLight,
  HeaderWrapper,
  Image,
  Job,
  Name,
  PersonalWrapper,
  Title,
} from "./Header.styles";
import imageDark from "assets/images/minhafoto-dark.png";
import imageLight from "assets/images/minhafoto-light.png";

export const Header: React.FC = () => {
  const { mode } = React.useContext(ModeContext);
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <HeaderWrapper className={mode} id="cv">
      {mode === "dark" ? <HeaderDrawDark /> : <HeaderDrawLight />}
      <PersonalWrapper data-aos="fade-right">
        <Title className={mode}>Oi, eu sou a</Title>
        <Name className={mode}>Lais Gomes</Name>
        <Job className={mode}>Desenvolvedora Front-End</Job>
        <ActionsWrapper>
          <Button>meu currículo</Button>
          <Button>entrar em contato</Button>
        </ActionsWrapper>
      </PersonalWrapper>
      <Image
        data-aos="fade-left"
        src={mode === "dark" ? imageDark : imageLight}
        alt="Lais"
      />
    </HeaderWrapper>
  );
};

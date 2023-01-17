import { Button } from "components/Button";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
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
import { ModeContext } from "contexts/DarkLight";
const imageDark = require("assets/images/minhafoto-dark.png");
const imageLight = require("assets/images/minhafoto-light.png");

export const Header: React.FC = () => {
  const { mode } = React.useContext(ModeContext);
  React.useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <HeaderWrapper className= {mode} id="cv">
      {mode === "dark" ? <HeaderDrawDark /> : <HeaderDrawLight />}
        <PersonalWrapper data-aos = "fade-right">
          <Title className= {mode}>Oi, eu sou a</Title>
          <Name className= {mode}>Lais Gomes</Name>
          <Job className= {mode}>Desenvolvedora Front-End</Job>
          <ActionsWrapper>
            <Button >meu currículo</Button>
            <Button >entrar em contato</Button>
          </ActionsWrapper>
        </PersonalWrapper>
      <Image data-aos = "fade-left" src={mode === "dark" ? imageDark : imageLight} alt="Lais" />
    </HeaderWrapper>
  );
};

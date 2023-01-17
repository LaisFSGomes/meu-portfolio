import React from "react";
import {
  About,
  AppBar,
  ContactMe,
  Footer,
  Form,
  Header,
  MyProjects,
  Skills,
} from "./components";
import { ModeProvider } from "./contexts";

export const App: React.FC = () => {
  return (
    <ModeProvider>
      <AppBar />
      <Header />
      <About />
      <Skills />
      <MyProjects />
      <Form />
      <ContactMe />
      <Footer />
    </ModeProvider>
  );
};

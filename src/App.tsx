import React from "react";
import { About, AppBar, ContactMe, Footer, Form, Header, Skills } from "./components";

export const App: React.FC = () => {  
  return (
    <React.Fragment>
      <AppBar />
      <Header />
      <About />
      <Skills />
      <Form />
      <ContactMe />
      <Footer />
    </React.Fragment>
  );
};

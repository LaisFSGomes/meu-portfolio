import React from "react";
// import Aos from "aos";
// import "aos/dist/aos.css";
import { About, AppBar, ContactMe, Footer, Header, Skills } from "./components";

export const App: React.FC = () => {
  // React.useEffect(() => {
  //   Aos.init({duration: 2000});
  // }, []);
  
  return (
    <React.Fragment>
      <AppBar />
      <Header />
      <About />
      <Skills />
      <ContactMe />
      <Footer />
    </React.Fragment>
  );
};

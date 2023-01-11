import React from 'react';
import { About, AppBar, ContactMe, Footer, Header, Skills } from './components';

export const App: React.FC = () => {
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

import React from 'react';
import { About, AppBar, Header, Skills } from './components';

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <AppBar />
      <Header />
      <About />
      <Skills />
    </React.Fragment>
  );
};

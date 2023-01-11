import React from 'react';
import { About, AppBar, Header } from './components';

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <AppBar />
      <Header />
      <About />
    </React.Fragment>
  );
};

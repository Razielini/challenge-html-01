import React from 'react';
import '../styles/components/App.styl';

import Footer from './Footer';
import Header from './Header';
import Content from './Content';

const App = () => {
  return (
    <>
      <Header />
      <Content />
      <h1>APP DE REACT!</h1>
      <Footer />
    </>
  );
};

export default App;

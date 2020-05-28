import React from 'react';
import '../styles/components/Logo.styl';

const Logo = ({ klass = 'header' }) => {
  return (
    <p className={`Logo ${klass}`}>
      Deck
      <span>.</span>
    </p>
  );
};

export default Logo;

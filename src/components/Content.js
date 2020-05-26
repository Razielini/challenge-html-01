import React from 'react';
import '../styles/components/Content.styl';

const Content = ({ children }) => {
  return (
    <div className="content">
      <div className="content-grid">{children}</div>
    </div>
  );
};

export default Content;

import React from 'react';
import '../styles/components/App.styl';
import data from '../data/data.json';

import Footer from './Footer';
import Header from './Header';
import Content from './Content';
import Item from './Item';

const App = () => {
  const { articles } = data;
  return (
    <>
      <Header />
      <Content>
        {articles.map(article => (
          <Item
            key={article.id}
            tag={article.tag}
            title={article.title}
            description={article.description}
            image={article.image}
            size={article.size}
          />
        ))}
      </Content>
      <Footer />
    </>
  );
};

export default App;

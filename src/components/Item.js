import React from 'react';
import '../styles/components/Item.styl';

const Item = props => {
  const { id, imageAlt, image, tag, title, description, size } = props;
  return (
    <div className={`Item ${size}`} key={id}>
      <figure className="Item-image">
        <img src={`../resources/imgs/${image}`} alt={imageAlt} />
        <span className="Item-tag">{tag}</span>
      </figure>
      <p className="Item-title">{title}</p>
      <p className="Item-description">{description}</p>
    </div>
  );
};

export default Item;

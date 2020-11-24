import React from 'react';

export default List = ({ items, ...props }) => {
  return (
    <ul>
      {items.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
};

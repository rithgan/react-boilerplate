import React from 'react';
import ReactDom from 'react-dom';

function Root() {
  // eslint-disable-next-line react/jsx-filename-extension
  return <h1>Hello,World</h1>;
}

// Render the Root element into the DOM
ReactDom.render(
  <Root />,
  document.getElementById('root'),
);

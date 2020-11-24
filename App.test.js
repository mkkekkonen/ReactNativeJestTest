import React from 'react';
import rendeder from 'react-test-renderer';

import App from './App';

describe('App', () => {
  test('children', () => {
    const tree = rendeder.create(<App />).toJSON();
    expect(tree.children.length).toEqual(1);
  });
});

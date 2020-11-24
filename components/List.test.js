import React from 'react';
import rendeder from 'react-test-renderer';

import List from './List';

const testData = ['apple', 'orange', 'banana'];

describe('List', () => {
  test('render', () => {
    const tree = rendeder.create(<List items={testData} />).toJSON();
    // console.log(JSON.stringify(tree));
    expect(tree.children.length).toEqual(3);
    expect(tree.children[0].children[0]).toEqual('apple');
  });
});

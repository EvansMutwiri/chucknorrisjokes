import 'react-native';
import React from 'react';
import Item from '../src/screens/home/item';
import renderer from 'react-test-renderer';

jest.useFakeTimers();

test('Item Test', () => {
  const snap = renderer.create(<Item />).toJSON();
  expect(snap).toMatchSnapshot();
});

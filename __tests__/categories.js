import 'react-native';
import React from 'react';
import Categories from '../src/screens/categories/index';
import renderer from 'react-test-renderer';

jest.useFakeTimers();
jest.mock('react-native-iphone-x-helper');
jest.mock('react-native-paper');

test('RCategories Test', () => {
  const snap = renderer.create(<Categories />).toJSON();
  expect(snap).toMatchSnapshot();
});

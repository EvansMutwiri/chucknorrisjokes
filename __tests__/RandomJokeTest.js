import 'react-native';
import React from 'react';
import RandomJoke from '../src/screens/random/randomJoke';
import renderer from 'react-test-renderer';

jest.useFakeTimers();

test('Random Joke Item Test', () => {
  const snap = renderer.create(<RandomJoke />).toJSON();
  expect(snap).toMatchSnapshot();
});

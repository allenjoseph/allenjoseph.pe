import React from 'react';
import { render } from 'react-testing-library';
import App from './App';

it('App container must has a header, section and footer', () => {
  const { container } = render(<App />);
  expect(container.getElementsByTagName('header').length).toBe(1);
  expect(container.getElementsByTagName('section').length).toBe(1);
  expect(container.getElementsByTagName('footer').length).toBe(1);
});

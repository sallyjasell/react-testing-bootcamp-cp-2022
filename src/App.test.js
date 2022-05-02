import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Picture of the Day title', () => {
  render(<App />);
  const mainElement = screen.getByText(/picture of the day/i);
  expect(mainElement).toBeInTheDocument();
});

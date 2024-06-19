import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders health status', async () => {
  render(<App />);
  const linkElement = await screen.findByText(/Health Status/i);
  expect(linkElement).toBeInTheDocument();
});

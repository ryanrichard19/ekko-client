import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import fetchMock from 'jest-fetch-mock';

// Enable fetch mocks
fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});

test('renders health status', async () => {
  // Mock the fetch response
  fetchMock.mockResponseOnce(JSON.stringify({ status: 'ok' }));

  render(<App />);
  const linkElement = await screen.findByText(/Health Status/i);
  expect(linkElement).toBeInTheDocument();
});

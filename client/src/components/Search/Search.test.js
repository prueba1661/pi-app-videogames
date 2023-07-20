import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { MemoryRouter } from 'react-router-dom'; // For mocking useNavigate

import Search from './Search';

test('Search component renders correctly', () => {
  const { getByPlaceholderText, getByText } = render(
    <MemoryRouter>
      <Search />
    </MemoryRouter>
  );

  const searchInput = getByPlaceholderText('Search your favorite game');
  const searchButton = getByText('Search');

  expect(searchInput).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
});

test('Submitting the form navigates to the correct search results page', () => {
  const mockNavigate = jest.fn();
  const { getByPlaceholderText, getByText } = render(
    <MemoryRouter>
      <Search />
    </MemoryRouter>
  );

  const searchInput = getByPlaceholderText('Search your favorite game');
  const searchButton = getByText('Search');

  // Enter a search query in the input field
  fireEvent.change(searchInput, { target: { value: 'Super Mario' } });

  // Submit the form
  fireEvent.click(searchButton);

  // Expect the navigate function to be called with the correct URL
  expect(mockNavigate).toHaveBeenCalledWith('/search-results?name=Super%20Mario');
});

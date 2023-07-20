// Import necessary testing libraries
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux'; // Importing directly from 'react-redux'
import configureStore from 'redux-mock-store'; // Importing configureStore to create a mocked Redux store

// Import the component to be tested
import Cards from '../src/components/Cards/Cards';

// Create a mocked Redux store
const mockStore = configureStore([]);

describe('Cards Component', () => {
  let store;

  beforeEach(() => {
    // Mock the useDispatch hook
    const mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);

    // Mock the useSelector hook for the component's Redux state
    useSelector.mockImplementation((selector) =>
      selector({
        filtredGames: [
          {
            id: 1,
            name: 'Game 1',
            image: 'game1.jpg',
            rating: 4.5,
            genres: ['Action', 'Adventure'],
            launchDate: '2023-07-20',
            stores: ['Steam', 'Epic Games Store'],
          },
          {
            id: 2,
            name: 'Game 2',
            image: 'game2.jpg',
            rating: 4.2,
            genres: ['Puzzle', 'Indie'],
            launchDate: '2023-07-21',
            stores: ['GOG', 'Xbox Store'],
          },
          // Add more mock games here if needed
        ],
        currentPage: 1,
        error: null,
      })
    );

    // Create a new mocked Redux store
    store = mockStore({});
  });

  test('renders loading spinner when games are being fetched', () => {
    // Mock the isLoading state to true
    useSelector.mockImplementation((selector) =>
      selector({
        filtredGames: [],
        currentPage: 1,
        error: null,
      })
    );

    render(
      <Provider store={store}>
        <Cards />
      </Provider>
    );

    // Assert that the loading spinner is rendered when games are being fetched
    const loadingSpinner = screen.getByTestId('loading-spinner');
    expect(loadingSpinner).toBeInTheDocument();
  });

  // Rest of the test cases remain the same
  // ...
});

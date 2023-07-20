import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Cards from '../components/Cards/Cards';

// Create a mock Redux store
const mockStore = configureMockStore([]);

describe('Cards Component', () => {
  let store;

  beforeEach(() => {
    // Create a mock store with initial state for testing
    const initialState = {
      currentPage: 1,
      error: null,
      filtredGames: [
        // Add mock data here if needed
      ],
    };
    store = mockStore(initialState);
  });

  it('should render loading component when games are loading', () => {
    render(
      <Provider store={store}>
        <Cards />
      </Provider>
    );

    // Verify that the loading component is rendered when games are loading
    expect(screen.getByTestId('loading-component')).toBeInTheDocument();
  });

  it('should render "NoResults" component when there are no games and loading is complete', () => {
    // Update the store to have no games and loading is complete
    store = mockStore({
      currentPage: 1,
      error: null,
      filtredGames: [],
    });

    render(
      <Provider store={store}>
        <Cards />
      </Provider>
    );

    // Verify that the "NoResults" component is rendered
    expect(screen.getByText('we have not found games.')).toBeInTheDocument();
  });

  it('should render cards when games are available', () => {
    // Update the store to have some games available
    store = mockStore({
      currentPage: 1,
      error: null,
      filtredGames: [
        { id: 1, name: 'Game 1', image: 'image1.jpg', rating: 4 },
        { id: 2, name: 'Game 2', image: 'image2.jpg', rating: 3.5 },
        // Add more mock games here if needed
      ],
    });

    render(
      <Provider store={store}>
        <Cards />
      </Provider>
    );

    // Verify that the cards are rendered for available games
    expect(screen.getAllByTestId('card-component')).toHaveLength(2); // Assuming there are 2 mock games in the store
  });

  it('should dispatch "setCurrentPage" action when pagination buttons are clicked', () => {
    render(
      <Provider store={store}>
        <Cards />
      </Provider>
    );

    // Mock the "dispatch" function to check if it is called
    const mockDispatch = jest.fn();
    store.dispatch = mockDispatch;

    // Simulate clicking on the next page button
    fireEvent.click(screen.getByText('Next'));
    // Verify that "setCurrentPage" action is dispatched with the correct page number
    expect(mockDispatch).toHaveBeenCalledWith(setCurrentPage(2));

    // Simulate clicking on the previous page button
    fireEvent.click(screen.getByText('Prev'));
    // Verify that "setCurrentPage" action is dispatched with the correct page number
    expect(mockDispatch).toHaveBeenCalledWith(setCurrentPage(1));
  });
});

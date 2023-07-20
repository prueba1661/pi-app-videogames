import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

// Mock the scrollTo method to avoid errors
window.scrollTo = jest.fn();

test('Header contains Search component', () => {
  render(<Header />);
  const searchComponent = screen.getByTestId('search-component');
  expect(searchComponent).toBeInTheDocument();
});

test('Header has two navigation links', () => {
  render(<Header />);
  const homeLink = screen.getByText('Home');
  const addGameLink = screen.getByText('Add Game');
  expect(homeLink).toBeInTheDocument();
  expect(addGameLink).toBeInTheDocument();
});

test('Home link scrolls to the top when clicked', () => {
  render(<Header />);
  const homeLink = screen.getByText('Home');
  fireEvent.click(homeLink);
  expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
});

test('Add Game link scrolls to the top when clicked', () => {
  render(<Header />);
  const addGameLink = screen.getByText('Add Game');
  fireEvent.click(addGameLink);
  expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
});

import 'babel-polyfill';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Card from './Card';

describe('Card', () => {
  const mockProps = {
    id: 1,
    title: 'Game Title',
    image: 'game_image.png',
    rating: 4.5,
    genres: [{ name: 'Action' }, { name: 'Adventure' }, { name: 'RPG' }],
    index: 0,
    stores: [
      { store: { name: 'Store 1' } },
      { store: { name: 'Store 2' } },
      { store: { name: 'Store 3' } },
    ],
  };

  test('enderiza la tarjeta con el contenido correcto', () => {
    render(
      <Router>
        <Card {...mockProps} />
      </Router>
    );

    // Verifica si el título se renderiza correctamente
    const titleElement = screen.getByText(mockProps.title);
    expect(titleElement).toBeInTheDocument();

    // Verifica si los generos se renderizan correctamente
    const genresElements = screen.getAllByRole('genre');
    expect(genresElements.length).toBe(mockProps.genres.length);

    // Verifica si la store se renderiza correctamente
    const storesElements = screen.getAllByRole('store');
    expect(storesElements.length).toBe(mockProps.stores.length);
  });

  test('redirecciona a la detail page al hacer click', () => {
    const mockHistoryPush = jest.fn();
    const { container } = render(
      <Router>
        <Card {...mockProps} history={{ push: mockHistoryPush }} />
      </Router>
    );

    // Simula el click en la card
    const cardLink = container.querySelector('a');
    fireEvent.click(cardLink);

    // Verifica si la URL de la página de detalle correcta se agregó al historial (history)
    expect(mockHistoryPush).toHaveBeenCalledWith(`/detail/${mockProps.id}`);
  });
});

const request = require('supertest');
const app = require('../src/app');
const { Genres } = require('../src/db'); 
const axios = require('axios');

jest.mock('axios'); // Mock axios to prevent actual network requests

describe('GET /genres/get', () => {
  it('should fetch genres from the external API and add them to the database', async () => {
    // Mock the external API response
    const mockGenres = [
      { name: 'Genre 1' },
      { name: 'Genre 2' },
      // Add more test genres here if needed
    ];
    const mockResponse = {
      data: { results: mockGenres },
    };
    axios.get.mockResolvedValue(mockResponse);

    // Mock the Genres model's findOrCreate method
    const mockFindOrCreate = jest.spyOn(Genres, 'findOrCreate');
    mockFindOrCreate.mockImplementation(async (options) => {
      // Simulate that a new record was created for each genre
      return [{}, true]; // Return an empty object and true to indicate a new record was created
    });

    // Perform the request to the /genres/get endpoint
    const response = await request(app).get('/genres/get');

    // Assert that the request was successful
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);

    // Assert that genres were added to the database
    expect(mockFindOrCreate).toHaveBeenCalledTimes(mockGenres.length);

    // After genres are added, fetch all genres from the database to ensure they were inserted successfully
    const allGenres = await Genres.findAll();
    console.log('allGenres:', allGenres); // Log allGenres to the console for debugging
    expect(allGenres.length).toBeGreaterThan(0);
  });

  it('should return an error status if something goes wrong', async () => {
    // Mock the external API request to throw an error
    axios.get.mockRejectedValue(new Error('Mocked error'));

    // Perform the request to the /genres/get endpoint
    const response = await request(app).get('/genres/get');

    // Assert that the request resulted in an error response
    expect(response.status).toBe(500);
  });
});
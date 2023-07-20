const request = require('supertest');
const app = require('../src/app');
const { Videogame } = require('../src/db');


describe('GET /videogames', () => {
  it('should return a list of games', async () => {
    const response = await request(app).get('/videogames');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
  }, 30000);

  it('should return an array of 100 games', async () => {
    const response = await request(app).get('/videogames');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBe(100);
  }, 30000);

  // Test case for handling errors
  it('should return an error status if something goes wrong', async () => {
    // Mock the behavior of Videogame.findAll to throw an error
    jest.spyOn(Videogame, 'findAll').mockImplementation(() => {
      throw new Error('Mocked error');
    });

    const response = await request(app).get('/videogames');
    expect(response.status).toBe(500);
  });
});

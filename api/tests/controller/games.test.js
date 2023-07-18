const request = require('supertest');
const app = require('../../src/app');

describe('GET /api/games', () => {
  test('Si hay un error debe retornar el estado 404 con el mensaje correspondiente', async () => {
    const response = await request(app).get('/api/games');
    
    expect(response.statusCode).toBe(404);
    
  });
});


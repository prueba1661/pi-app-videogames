const request = require('supertest');
const app = require('../src/app');
const { Videogame } = require('../src/db');


describe('GET /videogames', () => {
  it('Debe retornar una lista de juegos', async () => {
    // Realiza la solicitud al endpoint /videogames
    const response = await request(app).get('/videogames');
    // Asegura que la solicitud fue exitosa
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    // Asegura que la lista de juegos no esté vacía
    expect(response.body.length).toBeGreaterThan(0);
  }, 30000);

  it('La lista debe contener 100 juegos', async () => {
    // Realiza la solicitud al endpoint /videogames
    const response = await request(app).get('/videogames');
    // Asegura que la solicitud fue exitosa
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    // Asegura que la lista de juegos contenga 100 juegos
    expect(response.body.length).toBe(100);
  }, 30000);

  // Caso para manejar errores
  it('Debe retornar un estado 500 si algo sale mal', async () => {
    // Simula que el método findAll del modelo Videogame y lanza el error
    jest.spyOn(Videogame, 'findAll').mockImplementation(() => {
      throw new Error('Mocked error');
    });
    // Realiza la solicitud al endpoint /videogames
    const response = await request(app).get('/videogames');
    // Asegura que la solicitud dio como resultado un error
    expect(response.status).toBe(500);
  });
});

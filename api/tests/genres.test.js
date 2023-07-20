const request = require('supertest');
const app = require('../src/app');
const { Genres } = require('../src/db'); 
const axios = require('axios');

jest.mock('axios'); // // Simula axios para evitar solicitudes de red reales


describe('GET /genres/get', () => {
  it('debería obtener géneros desde la API externa y agregarlos a la base de datos', async () => {
    // Simula la respuesta de la API externa
    const mockGenres = [
      { name: 'Genre 1' },
      { name: 'Genre 2' },
    ];
    const mockResponse = {
      data: { results: mockGenres },
    };
    axios.get.mockResolvedValue(mockResponse);

    // Simula el método findOrCreate del modelo Genres
    const mockFindOrCreate = jest.spyOn(Genres, 'findOrCreate');
    mockFindOrCreate.mockImplementation(async (options) => {
      // Simula que se creó un nuevo registro para cada género
      return [{}, true]; // Devuelve un obj vacio y true para indicar que se creó un nuevo registro
    });

    // Realiza la solicitud al endpoint /genres/get
    const response = await request(app).get('/genres/get');

    // Asegura que la solicitud fue exitosa
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);

    // Asegura que se agregaron géneros a la base de datos
    expect(mockFindOrCreate).toHaveBeenCalledTimes(mockGenres.length);

    // Después de agregar los géneros, obtén todos los géneros de la base de datos para asegurarte de que se insertaron correctamente
    const allGenres = await Genres.findAll();
    console.log('allGenres:', allGenres); // Registra allGenres en la consola para depuración
    expect(allGenres.length).toBeGreaterThan(0);
  });

  it('debería devolver un estado de error si algo sale mal', async () => {
    // Simula que la solicitud a la API externa lanza un error
    axios.get.mockRejectedValue(new Error('Mocked error'));

    // Realiza la solicitud al endpoint /genres/get
    const response = await request(app).get('/genres/get');

    // Asegura que la solicitud resultó en una respuesta de error
    expect(response.status).toBe(500);
  });
});
const {Videogame, conn } = require('../src/db.js');


// Antes de correr los test, sincroniza el modelo con la db
describe('Modelos DB', () => {
  beforeAll(async () => {
    await conn.sync({force: true});
  });

  describe('Videogame', () => {
    // Testea que el modelo exista
    test('Debe existir el modelo', () => {
      expect(Videogame).toBeDefined();
    });

    test('La propiedad name no puede ser null', async () => {
      // Asegura que el nombre del juego no sea null, sino genera un error
      expect.assertions(1);
      try {
        await Videogame.create({ name: null });
      }
      catch (error) {
        expect(error).toBeDefined();
      }
    });

    test('La propiedad name debe ser un string', async () => {
      // Asegura que el nombre del juego sea un string, sino genera un error
      expect.assertions(1);
      try {
        await Videogame.create({ name: 123 });
      }
      catch (error) {
        expect(error).toBeDefined();
      }
    });

    test('La propiedad description no puede ser null', async () => {
      // Asegura que la descripción del juego no sea null, sino genera un error
      expect.assertions(1);
      try {
        await Videogame.create({ description: null });
      }
      catch (error) {
        expect(error).toBeDefined();
      }
    });
  });
//Luego de correr los test, sincroniza y cierra la conexión con la db
  afterAll(async () => {
    await conn.sync({ force: true });
    conn.close();
  });
});

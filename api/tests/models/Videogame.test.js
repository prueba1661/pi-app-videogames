const {db, Videogame, conn } = require('../../src/db.js');

describe('Modelos DB', () => {
  beforeAll(async () => {
    await conn.sync({force: true});
  });

  describe('Videogame', () => {
    test('Debe existir', () => {
      expect(Videogame).toBeDefined();
    });

    test('La propiedad name no puede ser null', async () => {
      expect.assertions(1);
      try {
        await Videogame.create({ name: null });
      }
      catch (error) {
        expect(error).toBeDefined();
      }
    });

    test('La propiedad name debe ser un string', async () => {
      expect.assertions(1);
      try {
        await Videogame.create({ name: 123 });
      }
      catch (error) {
        expect(error).toBeDefined();
      }
    });

    test('La propiedad description no puede ser null', async () => {
      expect.assertions(1);
      try {
        await Videogame.create({ description: null });
      }
      catch (error) {
        expect(error).toBeDefined();
      }
    });
  });

  afterAll(async () => {
    await conn.sync({ force: true });
    conn.close();
  });
});

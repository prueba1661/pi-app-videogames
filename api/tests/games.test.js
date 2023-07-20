const request = require("supertest");
const server = require("../src/app");
const { Videogame, conn } = require("../src/db");

describe("Videogames Routes", () => {
  beforeAll(async () => {
    await conn.sync({ force: true });
  });

  describe("GET / Videogame", () => {
    test("Debe responder con un estado 200", async () => {
      const res = await request(server).get("/videogame");
      expect(res.statusCode).toBe(200);
    });

    test("Debe responder con un array de juegos", async () => {
      const res = await request(server).get("/videogame");
      expect(res.body).toEqual(expect.arrayContaining([]));
    });
  });
});

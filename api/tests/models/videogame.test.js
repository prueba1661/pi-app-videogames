const { Sequelize, DataTypes } = require('sequelize');
const defineModels = require('../models/videogame');

// Create Sequelize instance and connect to a test database
const sequelize = new Sequelize('DB_NAME', 'DB_USER', 'DB_PASSWORD', {
  host: 'localhost',
  dialect: 'postgres',
});

// Define the models
defineModels(sequelize);

// Retrieve the defined models
const VideoGame = sequelize.models.videogame;

// Run the test
describe('VideoGame Model', () => {
  beforeAll(async () => {
    // Connect to the test database and sync the models
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    // Close the Sequelize connection
    await sequelize.close();
  });

  it('should create a video game', async () => {
    const game = await VideoGame.create({
      name: 'Example Game',
      image: 'example.jpg',
      description: 'This is an example game.',
      launchDate: '2023-07-17',
      rating: 4.5,
      platforms: ['PC', 'PlayStation 5'],
    });

    expect(game).toBeDefined();
    expect(game.name).toBe('Example Game');
    expect(game.image).toBe('example.jpg');
    expect(game.description).toBe('This is an example game.');
    expect(game.launchDate).toBe('2023-07-17');
    expect(game.rating).toBe(4.5);
    expect(game.platforms).toEqual(['PC', 'PlayStation 5']);
  });
});

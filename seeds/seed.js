// Connection to seed data files:
const seedPost = require('./postData');
const seedUser = require('./userData');
const seedComment = require('./commentData');

// Config connection
const sequelize = require('../config/connection');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    await seedUser();
    await seedPost();
    await seedComment();
    process.exit(0);
};

seedDatabase();

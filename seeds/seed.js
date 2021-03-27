const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./userData');
const postData = require('./postData');
const commentData = require('./commentData');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    await seedUserData();
    await seedPostData();
    await seedCommentData();
    process.exit(0);
};

seedDatabase();

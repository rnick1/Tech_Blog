// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
const { User } = require('.');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Post model (table) by extending off Sequelize's Model class
class Post extends Model { }

// set up fields and rules for Post model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    post_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post_body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_name: {
        type: DataTypes.STRING,
        references: {
            model: User,
            key: name
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;

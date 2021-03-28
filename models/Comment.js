const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');
const Post = require('./Post.js');

class Comment extends Model { }

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    comment_body: {
      type: DataTypes.STRING,
      allowNull: false
    },
    post_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Post,
            key: id
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: id
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

module.exports = Comment;

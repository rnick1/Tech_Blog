const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
//   foreignKey: 'user_id'
});

Comment.belongsTo(Post, {

});

Post.hasMany(Comment, {

});

module.exports = { User, Post, Comment };

const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');
const PostComment = require('./PostComment');

Post.belongsTo(User, {
    foreignKey: 'user_name',
});

User.hasMany(Post, {
  foreignKey: 'user_name',
});

Comment.belongsTo(Post, {
    through: PostComment,
    foreignKey: 'comment_id'
});

Post.hasMany(Comment, {
    through: PostComment,
    foreignKey: 'post_id'
});

module.exports = { 
    User, 
    Post,
    Comment , 
    PostComment
};
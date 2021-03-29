const { Comment } = require('../models');
const comments = [
    {
        comment_body: 'This is fantastic!',
        post_id: 3,
        user_id: 1
    },
    {
        comment_body: 'I cannot get enough of this!',
        post_id: 2,
        user_id: 2 

    },
    {
        comment_body: 'Simply amazing',
        post_id: 1,
        user_id: 3 
    }
    ]
    
    const seedComment = () => Comment.bulkCreate(comments);

    module.exports = seedComment;
    
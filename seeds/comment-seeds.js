const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 3,
        comment_content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        user_id: 2,
        post_id: 2,
        comment_content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
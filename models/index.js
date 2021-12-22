const User = require('./User');
const Comments = require('./Comments');
const Post = require('./Post');

Post.belongsTo(User, {foreignKey: 'userId'});
Comments.belongsTo(User, {foreignKey: 'userId'});
Post.hasMany(Comments, {foreignKey: 'postId'})

module.exports = {
  User,
  Comments,
  Post
};
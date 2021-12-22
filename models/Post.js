const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = require('../config/config.js');

class Post extends Model {}

Post.init(
  {
    // define columns
    title: {
      type: DataTypes.STRING
    },
    body: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize
  }
);

module.exports = Post;
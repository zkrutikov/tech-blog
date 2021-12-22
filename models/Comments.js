const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = require('../config/config.js');

class Comments extends Model {}

Comments.init(
  {
    // define columns
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize
  }
);

module.exports = Comments;
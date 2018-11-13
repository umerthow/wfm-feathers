'use strict';

// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
var Sequelize = require('sequelize');
var DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  var sequelizeClient = app.get('sequelizeClient');
  var players = sequelizeClient.define('players', {
    team_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    player_category_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    player_id: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    short_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    position: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    salary: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }, project_id: {
      type: DataTypes.CHAR(20),
      allowNull: true
    }
  }, {
    tableName: 'players',
    timestamps: true,
    paranoid: true,
    underscored: true
  }, {
    hooks: {
      beforeCount: function beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  players.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return players;
};
'use strict';

// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
var Sequelize = require('sequelize');
var DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  var sequelizeClient = app.get('sequelizeClient');
  var playersStatsWeeklyPoints = sequelizeClient.define('players_stats_weekly_points', {
    wfm_gameweek_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    player_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      unique: true
    },
    stat_category: {
      type: DataTypes.ENUM('atk', 'def', 'gk'),
      allowNull: true
    },
    stat_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    point: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    project_id: {
      type: DataTypes.CHAR(20),
      allowNull: true
    }
  }, {
    tableName: 'players_stats_weekly_points',
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
  playersStatsWeeklyPoints.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return playersStatsWeeklyPoints;
};
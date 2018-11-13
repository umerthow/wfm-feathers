'use strict';

// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
var Sequelize = require('sequelize');
var DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  var sequelizeClient = app.get('sequelizeClient');
  var userTeamsWeeklyTransfers = sequelizeClient.define('user_teams_weekly_transfers', {
    wfm_gameweek_id: {
      type: DataTypes.INTEGER(20),
      allowNull: false
    },
    user_team_id: {
      type: DataTypes.INTEGER(20),
      allowNull: false
    },
    player_id: {
      type: DataTypes.INTEGER(20),
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM('buy', 'sell'),
      allowNull: true
    },
    value: {
      type: DataTypes.INTEGER(20),
      allowNull: false
    },
    project_id: {
      type: DataTypes.CHAR(20),
      allowNull: true
    }
  }, {
    tableName: 'user_teams_weekly_transfers',
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
  userTeamsWeeklyTransfers.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return userTeamsWeeklyTransfers;
};
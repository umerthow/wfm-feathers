'use strict';

// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
var Sequelize = require('sequelize');
var DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  var sequelizeClient = app.get('sequelizeClient');
  var userTeamsWeeklyLineupSwaps = sequelizeClient.define('user_teams_weekly_lineup_swaps', {
    wfm_gameweek_id: {
      type: DataTypes.INTEGER(20),
      allowNull: false
    },
    user_team_id: {
      type: DataTypes.INTEGER(20),
      allowNull: false
    },
    in_player_id: {
      type: DataTypes.INTEGER(20),
      allowNull: false
    },
    out_player_id: {
      type: DataTypes.INTEGER(20),
      allowNull: false
    },
    project_id: {
      type: DataTypes.CHAR(20),
      allowNull: true
    }
  }, {
    tableName: 'user_teams_weekly_lineup_swaps',
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
  userTeamsWeeklyLineupSwaps.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return userTeamsWeeklyLineupSwaps;
};
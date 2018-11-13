'use strict';

// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
var Sequelize = require('sequelize');
var DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  var sequelizeClient = app.get('sequelizeClient');
  var userTeamsWeeklyFormation = sequelizeClient.define('user_teams_weekly_formation', {
    wfm_gameweek_id: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      unique: true
    },
    user_team_id: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      unique: true
    },
    team_formation_id: {
      type: DataTypes.INTEGER(20),
      allowNull: false
    }, project_id: {
      type: DataTypes.CHAR(20),
      allowNull: true
    }
  }, {
    tableName: 'user_teams_weekly_formation',
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
  userTeamsWeeklyFormation.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return userTeamsWeeklyFormation;
};
'use strict';

// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
var Sequelize = require('sequelize');
var DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  var sequelizeClient = app.get('sequelizeClient');
  var matches = sequelizeClient.define('matches', {
    wfm_gameweek_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    league_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    home_team_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    away_team_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    game_id: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    datetime: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    opta_matchday: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    home_team_score: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    away_team_score: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    periode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    state: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    project_id: {
      type: DataTypes.CHAR(20),
      allowNull: true
    }
  }, {
    tableName: 'matches',
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
  matches.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return matches;
};
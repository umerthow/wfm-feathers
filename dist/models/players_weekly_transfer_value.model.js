'use strict';

// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
var Sequelize = require('sequelize');
var DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  var sequelizeClient = app.get('sequelizeClient');
  var playersWeeklyTransferValue = sequelizeClient.define('players_weekly_transfer_value', {
    wfm_gameweek_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      unique: true
    },
    player_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      unique: true
    },
    transferValue: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    project_id: {
      type: DataTypes.CHAR(20),
      allowNull: true
    }
  }, {
    tableName: 'players_weekly_transfer_value',
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
  playersWeeklyTransferValue.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return playersWeeklyTransferValue;
};
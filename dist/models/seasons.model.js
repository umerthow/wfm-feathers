'use strict';

// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
var Sequelize = require('sequelize');
var DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  var sequelizeClient = app.get('sequelizeClient');
  var seasons = sequelizeClient.define('seasons', {
    code: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    is_current: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    project_id: {
      type: DataTypes.CHAR(20),
      allowNull: true
    }
  }, {
    tableName: 'seasons',
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
  seasons.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return seasons;
};
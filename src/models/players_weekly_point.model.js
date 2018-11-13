// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const playersWeeklyPoint = sequelizeClient.define('players_weekly_point', {
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
    point: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    project_id: {
      type: DataTypes.CHAR(20),
      allowNull: true
    }
  }, {
    tableName: 'players_weekly_point',
    timestamps: true,
    paranoid: true,
    underscored: true
  },{
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  playersWeeklyPoint.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return playersWeeklyPoint;
};

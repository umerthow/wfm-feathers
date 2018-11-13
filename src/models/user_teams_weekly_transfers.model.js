// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const userTeamsWeeklyTransfers = sequelizeClient.define('user_teams_weekly_transfers', {
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
      beforeCount(options) {
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

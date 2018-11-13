// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const userTeamsSquad = sequelizeClient.define('user_teams_squad', {
    user_team_id: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      unique: true
    },
    player_id: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      unique: true
    },project_id: {
      type: DataTypes.CHAR(20),
      allowNull: true
    }
  }, {
    tableName: 'user_teams_squad',
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
  userTeamsSquad.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return userTeamsSquad;
};

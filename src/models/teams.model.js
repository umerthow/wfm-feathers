// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const teams = sequelizeClient.define('teams', {
    league_id: {
      type: DataTypes.INTEGER(20),
      allowNull: false
    },
    team_uid: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sym_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },project_id: {
      type: DataTypes.CHAR(20),
      allowNull: true
    }
  }, {
    tableName: 'teams',
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
  teams.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return teams;
};

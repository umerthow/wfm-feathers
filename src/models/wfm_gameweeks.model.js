// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const wfmGameweeks = sequelizeClient.define('wfm_gameweeks', {
    season_id: {
      type: DataTypes.INTEGER(20),
      allowNull: false
    },
    week: {
      type: DataTypes.INTEGER(20),
      allowNull: false
    },
    start_datetime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_datetime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(11),
      allowNull: false,
      defaultValue: 'open'
    },
    project_id: {
      type: DataTypes.CHAR(20),
      allowNull: true
    }
  }, {
    tableName: 'wfm_gameweeks',
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
  wfmGameweeks.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return wfmGameweeks;
};

// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const statsPoints = sequelizeClient.define('stats_points', {
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    def_point: {
      type: DataTypes.INTEGER(20),
      allowNull: false
    },
    mid_point: {
      type: DataTypes.INTEGER(20),
      allowNull: false
    },
    fwd_point: {
      type: DataTypes.INTEGER(20),
      allowNull: false
    },
    gk_point: {
      type: DataTypes.INTEGER(20),
      allowNull: false
    },project_id: {
      type: DataTypes.CHAR(20),
      allowNull: true
    }
  }, {
    tableName: 'stats_point',
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
  statsPoints.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return statsPoints;
};

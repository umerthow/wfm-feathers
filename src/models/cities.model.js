// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const cities = sequelizeClient.define('cities', {
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    stadium_capacity: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    stadium_maintenance_cost: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    project_id: {
      type: DataTypes.CHAR(20),
      allowNull: true
    }
  },  {
    tableName: 'cities',
    timestamps: true,
    paranoid: true,
    underscored: true
  },
  {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  cities.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return cities;
};

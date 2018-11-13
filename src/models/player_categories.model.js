// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const playerCategories = sequelizeClient.define('player_categories', {
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    transfer_value: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    salary: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    project_id: {
      type: DataTypes.CHAR(20),
      allowNull: true
    }
  },{
    tableName: 'player_categories',
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
  playerCategories.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return playerCategories;
};

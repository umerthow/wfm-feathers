// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const staffCategories = sequelizeClient.define('staff_categories', {
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    salary: {
      type: DataTypes.INTEGER(20),
      allowNull: false
    },
    impact: {
      type: DataTypes.INTEGER(20),
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER(20),
      allowNull: false
    },project_id: {
      type: DataTypes.CHAR(20),
      allowNull: true
    }
  }, {
    tableName: 'staff_categories',
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
  staffCategories.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return staffCategories;
};

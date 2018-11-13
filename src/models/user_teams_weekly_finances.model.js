// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const userTeamsWeeklyFinances = sequelizeClient.define('user_teams_weekly_finances', {
    wfm_gameweek_id: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      unique: true
    },
    user_team_id: {
      type: DataTypes.INTEGER(20),
      allowNull: false,
      unique: true
    },
    ticket_sales_income: {
      type: DataTypes.INTEGER(20),
      allowNull: false
    },
    sponsors_income: {
      type: DataTypes.INTEGER(20),
      allowNull: false
    },
    players_sold_income: {
      type: DataTypes.INTEGER(20),
      allowNull: false
    },
    operational_cost_expense: {
      type: DataTypes.INTEGER(20),
      allowNull: false
    },
    players_salary_expense: {
      type: DataTypes.INTEGER(20),
      allowNull: false
    },
    staffs_salary_expense: {
      type: DataTypes.INTEGER(20),
      allowNull: false
    },
    players_bought_expense: {
      type: DataTypes.INTEGER(20),
      allowNull: false
    },project_id: {
      type: DataTypes.CHAR(20),
      allowNull: true
    }
  }, {
    tableName: 'user_teams_weekly_finances',
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
  userTeamsWeeklyFinances.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return userTeamsWeeklyFinances;
};

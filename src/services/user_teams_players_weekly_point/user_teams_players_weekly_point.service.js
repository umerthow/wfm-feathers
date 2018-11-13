// Initializes the `user_teams_players_weekly_point` service on path `/user-teams-players-weekly-po`
const createService = require('feathers-sequelize');
const createModel = require('../../models/user_teams_players_weekly_point.model');
const hooks = require('./user_teams_players_weekly_point.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/user-teams-players-weekly-point', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('user-teams-players-weekly-point');

  service.hooks(hooks);
};

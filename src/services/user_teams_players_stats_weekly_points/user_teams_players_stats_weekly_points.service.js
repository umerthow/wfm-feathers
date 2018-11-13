// Initializes the `user_teams_players_stats_weekly_points` service on path `/user-teams-players-stats-wee`
const createService = require('feathers-sequelize');
const createModel = require('../../models/user_teams_players_stats_weekly_points.model');
const hooks = require('./user_teams_players_stats_weekly_points.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/user-teams-players-stats-weekly-points', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('user-teams-players-stats-weekly-points');

  service.hooks(hooks);
};

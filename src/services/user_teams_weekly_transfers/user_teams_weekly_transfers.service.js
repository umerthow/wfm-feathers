// Initializes the `user_teams_weekly_transfers` service on path `/user-teams-weekly-transfers`
const createService = require('feathers-sequelize');
const createModel = require('../../models/user_teams_weekly_transfers.model');
const hooks = require('./user_teams_weekly_transfers.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/user-teams-weekly-transfers', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('user-teams-weekly-transfers');

  service.hooks(hooks);
};

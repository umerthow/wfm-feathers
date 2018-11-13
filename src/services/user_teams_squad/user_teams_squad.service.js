// Initializes the `user_teams_squad` service on path `/user-teams-squad`
const createService = require('feathers-sequelize');
const createModel = require('../../models/user_teams_squad.model');
const hooks = require('./user_teams_squad.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/user-teams-squad', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('user-teams-squad');

  service.hooks(hooks);
};

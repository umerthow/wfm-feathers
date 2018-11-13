// Initializes the `user_teams` service on path `/user-teams`
const createService = require('feathers-sequelize');
const createModel = require('../../models/user_teams.model');
const hooks = require('./user_teams.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/user-teams', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('user-teams');

  service.hooks(hooks);
};

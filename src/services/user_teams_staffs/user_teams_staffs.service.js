// Initializes the `user_teams_staffs` service on path `/user-teams-staffs`
const createService = require('feathers-sequelize');
const createModel = require('../../models/user_teams_staffs.model');
const hooks = require('./user_teams_staffs.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/user-teams-staffs', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('user-teams-staffs');

  service.hooks(hooks);
};

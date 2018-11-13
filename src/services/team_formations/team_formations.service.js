// Initializes the `team_formations` service on path `/team-formations`
const createService = require('feathers-sequelize');
const createModel = require('../../models/team_formations.model');
const hooks = require('./team_formations.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/team-formations', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('team-formations');

  service.hooks(hooks);
};

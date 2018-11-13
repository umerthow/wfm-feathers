// Initializes the `wfm_gameweeks` service on path `/wfm-gameweeks`
const createService = require('feathers-sequelize');
const createModel = require('../../models/wfm_gameweeks.model');
const hooks = require('./wfm_gameweeks.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/wfm-gameweeks', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('wfm-gameweeks');

  service.hooks(hooks);
};

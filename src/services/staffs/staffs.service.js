// Initializes the `staffs` service on path `/staffs`
const createService = require('feathers-sequelize');
const createModel = require('../../models/staffs.model');
const hooks = require('./staffs.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/staffs', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('staffs');

  service.hooks(hooks);
};

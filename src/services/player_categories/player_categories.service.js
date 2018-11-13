// Initializes the `player_categories` service on path `/player-categories`
const createService = require('feathers-sequelize');
const createModel = require('../../models/player_categories.model');
const hooks = require('./player_categories.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/player-categories', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('player-categories');

  service.hooks(hooks);
};

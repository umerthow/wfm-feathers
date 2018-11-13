"use strict";

module.exports = {
  before: {
    all: [],
    find: [function (context) {
      debugger;
      // Get the Sequelize instance. In the generated application via:
      context.params.sequelize = {
        // where: {
        //   id: 3
        // }
      };

      return context;
    }],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
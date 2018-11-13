'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// Initializes the `cities` service on path `/cities`
var createService = require('feathers-sequelize');
var createModel = require('../../models/cities.model');
var hooks = require('./cities.hooks');
var config = require('config');
var AuthPassport = require('@supersoccer/api-auth-passport').default;
var redis = config.redis;

var scopes = {
  bannerRead: 'https://api.supersoccer.tv/campaigns/banners'
};

var authPassport = new AuthPassport({
  api: 'campaigns',
  store: {
    dialect: 'redis',
    host: redis.host,
    port: redis.port
  }
});
module.exports = function (app) {
  var _this = this;

  var Model = createModel(app);
  var paginate = app.get('paginate');
  var query = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              debugger;
              console.log(req.user);
              next();

            case 3:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function query(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();

  console.log(paginate);

  var options = {
    Model: Model,
    paginate: paginate,
    query: query
  };

  app.use(function (req, res, next) {

    var query = req.query;
    console.log(query.user);
    req.feathers.req = {
      ip: req.ip
    };
    next();
  });

  // contoh use global auth
  app.use(function (req, res, next) {
    debugger;
    authPassport.validate({
      scope: scopes.bannerRead,
      credentialsRequired: true
    }), next();
  });

  // contoh service menggunakan authentication 
  debugger;
  app.use('/cities', authPassport.validate({
    scope: scopes.bannerRead,
    credentialsRequired: false
  }), createService(options));

  // Get our initialized service so that we can register hooks
  var service = app.service('cities');

  service.hooks(hooks);
};
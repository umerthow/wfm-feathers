'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// Application hooks that run for every service
var log = require('./hooks/log');
var _ = require('lodash');
var config = require('config');
var redis = config.redis;
// const { Forbidden } = require('feathers-errors');

var AuthPassport = require('@supersoccer/api-auth-passport').default;

var auth = {};

var scopes = {
  bannerRead: 'https://api.supersoccer.tv/campaigns/banners.read',
  bannerCreate: 'https://api.supersoccer.tv/campaigns/banners.create',
  bannerUpdate: 'https://api.supersoccer.tv/campaigns/banners.update',
  bannerDelete: 'https://api.supersoccer.tv/campaigns/banners.delete',
  bannerPositionRead: 'https://api.supersoccer.tv/campaigns/banner-positions.read',
  bannerPositionCreate: 'https://api.supersoccer.tv/campaigns/banner-positions.create',
  bannerPositionUpdate: 'https://api.supersoccer.tv/campaigns/banner-positions.update',
  bannerPositionDelete: 'https://api.supersoccer.tv/campaigns/banner-positions.delete',
  videoCreate: 'https://api.supersoccer.tv/videos/videos.create'
};

var authPassport = new AuthPassport({
  api: 'campaigns',
  store: {
    dialect: 'redis',
    host: redis.host,
    port: redis.port
  }
});

auth.CheckUsers = function (hooks, next) {
  //throw new Forbidden('You are not allowed to access this');

  debugger;
  authPassport.validate({
    scope: scopes.bannerRead,
    credentialsRequired: false
  });
  next();
};

module.exports = {
  before: {
    all: [log()],
    find: [auth.CheckUsers],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [log()],
    find: [function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(context) {
        var procesArray = function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(tt) {
            var _this = this;

            var promises;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    promises = tt.map(function () {
                      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ct) {
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _context.next = 2;
                                return isCamelcase(ct);

                              case 2:
                                return _context.abrupt('return', _context.sent);

                              case 3:
                              case 'end':
                                return _context.stop();
                            }
                          }
                        }, _callee, _this);
                      }));

                      return function (_x3) {
                        return _ref3.apply(this, arguments);
                      };
                    }());
                    _context2.next = 3;
                    return Promise.all(promises).then(function (data) {
                      return data;
                    });

                  case 3:
                    return _context2.abrupt('return', _context2.sent);

                  case 4:
                  case 'end':
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          return function procesArray(_x2) {
            return _ref2.apply(this, arguments);
          };
        }();

        var res, path, result, isCamelcase;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                isCamelcase = function isCamelcase(ct) {
                  var result = {
                    id: ct.id,
                    type: path,
                    attributes: {}
                  };

                  for (var key in ct) {
                    var newKey = _.camelCase(key);
                    result.attributes[newKey] = ct[key];
                    delete result.attributes.id;
                    delete result.attributes.deletedAt;
                    delete result.attributes.projectId;
                  }
                  return result;
                };

                res = context.result;
                path = context.path;
                result = {
                  total: res.total,
                  skip: res.skip,
                  limit: res.limit,
                  type: path,
                  data: []
                };


                procesArray(res.data).then(function (res) {
                  console.log(res);
                  result.data = res;
                });

                context.result = result;

                return _context3.abrupt('return', context);

              case 7:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, undefined);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()],
    get: [function (context) {
      var res = context.result;
      var path = context.path;
      debugger;
      var result = {
        id: res.id,
        type: path,
        attributes: {}
      };

      for (var key in res) {
        var newKey = _.camelCase(key);
        result.attributes[newKey] = res[key];
      }

      delete result.attributes.id;
      delete result.attributes.deletedAt;
      delete result.attributes.projectId;

      context.result = result;

      return context;
    }],
    create: [function (context) {
      var res = context.result;
      var path = context.path;
      var result = {
        id: res.id,
        type: path,
        attributes: {}
      };

      for (var key in res) {
        var newKey = _.camelCase(key);
        result.attributes[newKey] = res[key];
      }

      delete result.attributes.id;
      delete result.attributes.deletedAt;
      delete result.attributes.projectId;

      context.result = result;
    }],
    update: [function (context) {
      var res = context.result;
      var path = context.path;
      var result = {
        id: res.id,
        type: path,
        attributes: {}
      };

      for (var key in res) {
        var newKey = _.camelCase(key);
        result.attributes[newKey] = res[key];
      }

      delete result.attributes.id;
      delete result.attributes.deletedAt;
      delete result.attributes.projectId;

      context.result = result;
    }],
    patch: [function (context) {
      var res = context.result;
      var path = context.path;
      var result = {
        id: res.id,
        type: path,
        attributes: {}
      };

      for (var key in res) {
        var newKey = _.camelCase(key);
        result.attributes[newKey] = res[key];
      }

      delete result.attributes.id;
      delete result.attributes.deletedAt;
      delete result.attributes.projectId;

      context.result = result;
    }],
    remove: [function (context) {
      var res = context.result;
      var path = context.path;
      var result = {
        id: res.id,
        type: path,
        attributes: {},
        message: 'success delete'
      };

      for (var key in res) {
        var newKey = _.camelCase(key);
        result.attributes[newKey] = res[key];
      }

      delete result.attributes.id;
      delete result.attributes.deletedAt;
      delete result.attributes.projectId;

      context.result = result;
    }]
  },

  error: {
    all: [log()],
    find: [],
    get: [function (context) {
      console.log(context.result);
      debugger;
      // const err = context.error;
      // const params = context.params;
    }],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
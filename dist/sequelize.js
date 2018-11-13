'use strict';

var Sequelize = require('sequelize');
var config = require('config');

var db = config.db;
var Op = Sequelize.Op;

var operatorsAliases = {
  $eq: Op.eq,
  $ne: Op.ne,
  $gte: Op.gte,
  $gt: Op.gt,
  $lte: Op.lte,
  $lt: Op.lt,
  $not: Op.not,
  $in: Op.in,
  $notIn: Op.notIn,
  $is: Op.is,
  $like: Op.like,
  $notLike: Op.notLike,
  $iLike: Op.iLike,
  $notILike: Op.notILike,
  $regexp: Op.regexp,
  $notRegexp: Op.notRegexp,
  $iRegexp: Op.iRegexp,
  $notIRegexp: Op.notIRegexp,
  $between: Op.between,
  $notBetween: Op.notBetween,
  $overlap: Op.overlap,
  $contains: Op.contains,
  $contained: Op.contained,
  $adjacent: Op.adjacent,
  $strictLeft: Op.strictLeft,
  $strictRight: Op.strictRight,
  $noExtendRight: Op.noExtendRight,
  $noExtendLeft: Op.noExtendLeft,
  $and: Op.and,
  $or: Op.or,
  $any: Op.any,
  $all: Op.all,
  $values: Op.values,
  $col: Op.col
};

module.exports = function (app) {
  // const connect = new Sequelize(db.name, db.user, db.password, db);
  var sequelize = new Sequelize(db.name, db.user, db.password, {
    host: db.host,
    dialect: db.dialect,
    logging: false,
    operatorsAliases: operatorsAliases,
    define: {
      freezeTableName: true
    }
  });
  var oldSetup = app.setup;

  app.set('sequelizeClient', sequelize);

  app.setup = function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var result = oldSetup.apply(this, args);

    // Set up data relationships
    var models = sequelize.models;
    Object.keys(models).forEach(function (name) {
      if ('associate' in models[name]) {
        models[name].associate(models);
      }
    });

    // Sync to the database
    sequelize.sync();

    return result;
  };
};
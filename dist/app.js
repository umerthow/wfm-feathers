'use strict';

require('babel-polyfill');

var path = require('path');
var favicon = require('serve-favicon');
var compress = require('compression');
var helmet = require('helmet');
var cors = require('cors');
var logger = require('./logger');

var dotenv = require('dotenv');
var feathers = require('@feathersjs/feathers');
var configuration = require('@feathersjs/configuration');
var express = require('@feathersjs/express');
var socketio = require('@feathersjs/socketio');

var middleware = require('./middleware');
var services = require('./services');
var appHooks = require('./app.hooks');
var channels = require('./channels');

var sequelize = require('./sequelize');

var app = express(feathers());

// Load app configuration
app.configure(configuration());
// Enable security, CORS, compression, favicon and body parsing
app.use(helmet());
app.use(cors());
app.use(compress());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(favicon(path.join(app.get('public'), 'favicon.ico')));
// Host the public folder
app.use('/', express.static(app.get('public')));

// Set up Plugins and providers
app.configure(express.rest());
app.configure(socketio());

app.configure(sequelize);

// Configure other middleware (see `middleware/index.js`)
app.configure(middleware);
// Set up our services (see `services/index.js`)
app.configure(services);
// Set up event channels (see channels.js)
app.configure(channels);

// Configure a middleware for 404s and the error handler
app.use(express.notFound());
app.use(express.errorHandler({ logger: logger }));

app.hooks(appHooks);
dotenv.load();

console.log("sever running on port " + process.env.WFM_SERVER_APP_PORT);
module.exports = app;
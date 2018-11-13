// Initializes the `cities` service on path `/cities`
const createService = require('feathers-sequelize');
const createModel = require('../../models/cities.model');
const hooks = require('./cities.hooks');
const config = require('config');
const AuthPassport = require('@supersoccer/api-auth-passport').default;
const redis = config.redis;


const scopes = {
  bannerRead: 'https://api.supersoccer.tv/campaigns/banners',
};

const authPassport  =  new AuthPassport({
  api: 'campaigns',
  store: {
    dialect : 'redis',
    host    : redis.host,
    port    : redis.port
  }
});
module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');
  const query = async (req,res,next) => {
    debugger;
    console.log(req.user);
    next();
  };

  console.log(paginate);

  const options = {
    Model,
    paginate,
    query
  };

  app.use(function(req, res, next) {
    
    let query =  req.query;
    console.log(query.user);
    req.feathers.req = {
      ip: req.ip
    };
    next();
  });


  // contoh use global auth
  app.use(function(req, res, next) {
    debugger;
    authPassport.validate({
      scope: scopes.bannerRead,
      credentialsRequired: true
    }), 
    next();
  });

  // contoh service menggunakan authentication 
  debugger;
  app.use('/cities', authPassport.validate({
    scope: scopes.bannerRead,
    credentialsRequired: false
  }), 
  createService(options));


  // Get our initialized service so that we can register hooks
  const service = app.service('cities');


  service.hooks(hooks);
};

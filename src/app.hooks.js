// Application hooks that run for every service
const log = require('./hooks/log');
const _  = require('lodash');
const config = require('config');
const redis = config.redis;
// const { Forbidden } = require('feathers-errors');

const AuthPassport = require('@supersoccer/api-auth-passport').default;

let auth = {};

const scopes = {
  bannerRead: 'https://api.supersoccer.tv/campaigns/banners.read',
  bannerCreate: 'https://api.supersoccer.tv/campaigns/banners.create',
  bannerUpdate: 'https://api.supersoccer.tv/campaigns/banners.update',
  bannerDelete: 'https://api.supersoccer.tv/campaigns/banners.delete',
  bannerPositionRead: 'https://api.supersoccer.tv/campaigns/banner-positions.read',
  bannerPositionCreate: 'https://api.supersoccer.tv/campaigns/banner-positions.create',
  bannerPositionUpdate: 'https://api.supersoccer.tv/campaigns/banner-positions.update',
  bannerPositionDelete: 'https://api.supersoccer.tv/campaigns/banner-positions.delete',
  videoCreate: 'https://api.supersoccer.tv/videos/videos.create',
};

const authPassport  =  new AuthPassport({
  api: 'campaigns',
  store: {
    dialect : 'redis',
    host    : redis.host,
    port    : redis.port
  }
});

auth.CheckUsers  = (hooks,next) => {
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
    all: [ log() ],
    find: [auth.CheckUsers],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [ log() ],
    find: [
      async (context) => {
        let res = context.result;
        let path = context.path;
        
        let result  = {
          total: res.total,
          skip:res.skip,
          limit:res.limit,
          type:path,
          data: [],
        };

        procesArray(res.data).then((res) => {
          console.log(res);
          result.data =  res;
        });

        function isCamelcase(ct) {
          let result  = {
            id: ct.id,
            type: path,
            attributes: {}
          };
     
          for (const key in ct) {
            const newKey =  _.camelCase(key);
            result.attributes[newKey] = ct[key];
            delete result.attributes.id;
            delete result.attributes.deletedAt;
            delete result.attributes.projectId;
          }
          return result;
        
        }

        async function procesArray(tt){
         
          const promises =  tt.map(async (ct)=> {
            return await isCamelcase(ct);
          });

          return await Promise.all(promises).then((data)  => {
            return data;
          });
        
          
        }

        context.result = result;

        return context;
      }
    ],
    get: [      
      function(context) {
        let res = context.result;
        let path = context.path;
        debugger;
        let result  = {
          id: res.id,
          type: path,
          attributes: {}
        };

        for (const key in res) {
          const newKey =  _.camelCase(key);
          result.attributes[newKey] = res[key];
        } 

        delete result.attributes.id;
        delete result.attributes.deletedAt;
        delete result.attributes.projectId;
    
        context.result = result;

        return context;
      }],
    create: [

      function(context) {
        let res = context.result;
        let path = context.path;
        let result  = {
          id: res.id,
          type: path,
          attributes: {}
        };

        for (const key in res) {
          const newKey =  _.camelCase(key);
          result.attributes[newKey] = res[key];
        } 

        delete result.attributes.id;
        delete result.attributes.deletedAt;
        delete result.attributes.projectId;

        context.result = result;
      }

    ],
    update: [
      function(context) {
        let res = context.result;
        let path = context.path;
        let result  = {
          id: res.id,
          type: path,
          attributes: {}
        };

        for (const key in res) {
          const newKey =  _.camelCase(key);
          result.attributes[newKey] = res[key];
        } 

        delete result.attributes.id;
        delete result.attributes.deletedAt;
        delete result.attributes.projectId;

        context.result = result;
      }

    ],
    patch: [
      function(context) {
        let res = context.result;
        let path = context.path;
        let result  = {
          id: res.id,
          type: path,
          attributes: {}
        };

        for (const key in res) {
          const newKey =  _.camelCase(key);
          result.attributes[newKey] = res[key];
        } 

        delete result.attributes.id;
        delete result.attributes.deletedAt;
        delete result.attributes.projectId;
      
        context.result = result;
      }

    ],
    remove: [
      function(context) {
        let res = context.result;
        let path = context.path;
        let result  = {
          id: res.id,
          type: path,
          attributes: {},
          message: 'success delete'
        };

        for (const key in res) {
          const newKey =  _.camelCase(key);
          result.attributes[newKey] = res[key];
        } 

        delete result.attributes.id;
        delete result.attributes.deletedAt;
        delete result.attributes.projectId;

        context.result = result;

      }
    ]
  },

  error: {
    all: [ log() ],
    find: [],
    get: [
      function(context){
        console.log(context.result);
        debugger;
        // const err = context.error;
        // const params = context.params;
      }
    ],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};

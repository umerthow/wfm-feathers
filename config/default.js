/* eslint-disable camelcase */
const dotenv = require('dotenv');
const exceptions = ['production', 'staging'];

/* Override the values if the environment is not in the exception lists */
if (!exceptions.includes(process.env.NODE_ENV)) {
  dotenv.config();
}

const {
  WFM_APP_RELOAD_INTERVAL_IN_MINUTES,
  WFM_SERVER_APP_PORT,
  WFM_DATABASE_MASTER_DRIVER,
  WFM_DATABASE_MASTER_HOST,
  WFM_DATABASE_MASTER_PORT,
  WFM_DATABASE_MASTER_USERNAME,
  WFM_DATABASE_MASTER_PASSWORD,
  WFM_DATABASE_MASTER_DATABASE,
  WFM_REDIS_HOST,
  WFM_REDIS_PORT,
  WFM_REDIS_PREFIX,
  WFM_REDIS_TTL
} = process.env;

module.exports = {
  
  app:{
    reloadInterval:WFM_APP_RELOAD_INTERVAL_IN_MINUTES
  },
  host: '127.0.0.1',
  port: WFM_SERVER_APP_PORT,
  public: '../public/',
  paginate: {
    default: 10,
    max: 50
  },
  db: {
    host: WFM_DATABASE_MASTER_HOST,
    port: WFM_DATABASE_MASTER_PORT,
    dialect: WFM_DATABASE_MASTER_DRIVER,
    name: WFM_DATABASE_MASTER_DATABASE,
    user: WFM_DATABASE_MASTER_USERNAME,
    password: WFM_DATABASE_MASTER_PASSWORD
  },
  redis: {
    host: WFM_REDIS_HOST,
    port: WFM_REDIS_PORT,
    prefix: WFM_REDIS_PREFIX,
    ttl: WFM_REDIS_TTL
  },

};
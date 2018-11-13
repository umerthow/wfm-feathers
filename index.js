'use strict';

const config = require('config');
const Recluster = require('recluster');
const Path = require('path');

let opt = {};

const cluster = Recluster(Path.resolve(__dirname, './dist/index.js'), opt);
cluster.run();

process.on('SIGUSR2', function () {
  console.log('Got SIGUSR2, reloading cluster...');
  cluster.reload();
});

// Reload every cores every given minute(s) in config
setInterval(() => cluster.reload(), config.app.reloadInterval * 60 * 1000);

console.log('spawned cluster, kill -s SIGUSR2', process.pid, 'to reload');

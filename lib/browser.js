'use strict';

var userAgent = require('./user-agent');

module.exports = window.host = {
  global: window,
  node: false,
  karma: false,
  os: userAgent.getOS(),
  browser: userAgent.getBrowser(),
  env: {},
};

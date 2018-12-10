"use strict";

var Host = require("./host");
var userAgent = require("./user-agent");

module.exports = window.host = new Host({
  global: window,
  node: false,
  karma: false,
  os: userAgent.getOS(),
  browser: userAgent.getBrowser(),
  env: {},
});

'use strict';

var Host = require('./host');
var karmaPlugin = require('./karma-plugin');

global.host = new Host({
  global: global,
  node: getNode(),
  karma: /karma$/.test(process.argv[1]),
  os: getOS(),
  browser: false,
  env: process.env,
});

// Export the Karma plugin
module.exports = {
  'framework:host-environment': ['factory', karmaPlugin],
};

/**
 * Returns information about the current Node.js environment
 *
 * @returns {object}
 */
function getNode () {
  var versionParts = /(\d+)\.(\d+)(?:\.(\d+))?/.exec(process.version);
  var major = parseInt(versionParts[1]) || 0;
  var minor = parseInt(versionParts[2]) || 0;
  var patch = parseInt(versionParts[3]) || 0;

  var node = {
    version: parseFloat(major + '.' + minor),
    majorVersion: major,
    minorVersion: minor,
    patchVersion: patch,
  };

  node['v' + major] = true;

  return node;
}

/**
 * Returns information about the current operating system
 *
 * @returns {object}
 */
function getOS () {
  var os = require('os');
  var platform = os.platform();

  var windows = /^win/.test(platform);
  var mac = platform === 'darwin';

  return {
    windows: windows,
    mac: mac,
    linux: !(windows || mac),
  };
}

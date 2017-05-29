'use strict';

var userAgent = require('./user-agent');

module.exports = karmaPlugin;

/**
 * Configures Karma to serve a JavaScript file that exposes the `host` global variable
 * and sets is properties appropriately for each browser.
 *
 * @param {object[]} files - The array of file patterns that Karma will serve
 */
function karmaPlugin (files) {
  // Build a script that overrides the host properties for each browser
  var script = '(function () {\n' +
    '  window.host = ' + JSON.stringify(host, null, 2) + '\n\n' +
    '  host.global = window;\n' +
    '  host.node = false;\n' +
    '  host.karma = true;\n' +
    '  host.os = getOS();\n' +
    '  host.browser = getBrowser();\n\n' +
    userAgent.getOS.toString() + '\n\n' +
    userAgent.getBrowser.toString() + '\n\n' +
    '}());';

  // Save the JavaScript file as a temp file
  var temp = require('temp').track();
  var fs = require('fs');
  var file = temp.openSync({ prefix: 'host-', suffix: '.js' });
  fs.writeSync(file.fd, script);
  fs.closeSync(file.fd);

  // Inject the JavaScript file into Karma's file list
  files.unshift({
    pattern: file.path,
    included: true,
    served: true,
    watched: false,
  });
}

// Dependency injection for Karma
karmaPlugin.$inject = ['config.files'];

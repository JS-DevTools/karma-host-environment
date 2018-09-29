/*!
 * Karma Host Environment v1.1.4 (September 29th 2018)
 * 
 * https://github.com/James-Messinger/karma-host-environment
 * 
 * @author  James Messinger (https://jamesmessinger.com)
 * @license MIT
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.host = f()}})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var Host = require('./host');
var userAgent = require('./user-agent');

module.exports = window.host = new Host({
  global: window,
  node: false,
  karma: false,
  os: userAgent.getOS(),
  browser: userAgent.getBrowser(),
  env: {},
});

},{"./host":2,"./user-agent":3}],2:[function(require,module,exports){
'use strict';

module.exports = Host;

/**
 * Returns a Host insance with the given properties.
 *
 * @param {object} props - The host environment properties
 * @class
 */
function Host (props) {
  clone(this, props);
}

/**
 * Safely serializes a Host object as JSON.
 *
 * @returns {object}
 */
Host.prototype.toJSON = function () {
  var json = clone({}, this);

  // The global object can't be serialized to JSON because it has circular references.
  // So call just serialize its toString() representation instead
  json.global = Object.prototype.toString.call(json.global);

  return json;
};

/**
 * Copies the properties of one object to another.
 *
 * @param {object} target - The object that the properties are copied to
 * @param {object} source - The object that the properties are copied from
 * @returns {object} - Returns the target object
 */
function clone (target, source) {
  var keys = Object.keys(source);

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    target[key] = source[key];
  }

  return target;
}

},{}],3:[function(require,module,exports){
'use strict';

module.exports = {
  /**
   * Returns information about the current browser environment, by parsing the user-agent string
   *
   * @returns {object}
   */
  getBrowser: function getBrowser () {
    var userAgent = navigator.userAgent;

    var browser = {
      IE: false,
      chrome: false,
      firefox: false,
      safari: false,
      mobile: /(Mobile|Android|iPhone|iPad)/.test(userAgent),

    };

    // NOTE: The order matters here!
    var userAgents = [
      { name: 'IE', pattern: /(?:MSIE|Edge)(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
      { name: 'IE', pattern: /Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/ },
      { name: 'chrome', pattern: /Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
      { name: 'firefox', pattern: /Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
      { name: 'safari', pattern: /(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/ },
    ];

    for (var i = 0; i < userAgents.length; i++) {
      var match = userAgents[i].pattern.exec(userAgent);
      if (match) {
        var major = parseInt(match[1]) || 0;
        var minor = parseInt(match[2]) || 0;
        var patch = parseInt(match[3]) || 0;

        var thisBrowser = browser[userAgents[i].name] = {
          version: parseFloat(major + '.' + minor),
          majorVersion: major,
          minorVersion: minor,
          patchVersion: patch,
        };

        thisBrowser['v' + major] = true;

        break;
      }
    }

    return browser;
  },

  /**
   * Returns information about the current operating system, by parsing the user-agent string
   *
   * @returns {object}
   */
  getOS: function getOS () {
    var userAgent = navigator.userAgent;

    var os = {
      windows: false,
      mac: false,
      linux: false,
    };

    // NOTE: The order matters here!
    var userAgents = [
      { name: 'mac', pattern: /(Mac OS|Macintosh|iPhone|iPad)/ },
      { name: 'windows', pattern: /(Windows NT|Windows Phone)/ },
      { name: 'linux', pattern: /(Linux|Android)/ },
    ];

    for (var i = 0; i < userAgents.length; i++) {
      var match = userAgents[i].pattern.exec(userAgent);
      if (match) {
        os[userAgents[i].name] = true;
        break;
      }
    }

    return os;
  },
};

},{}]},{},[1])(1)
});
//# sourceMappingURL=karma-host-environment.js.map

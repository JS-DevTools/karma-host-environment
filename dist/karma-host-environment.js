/*!
 * Karma Host Environment v1.0.1 (May 7th 2017)
 * 
 * https://github.com/bigstickcarpet/karma-host-environment
 * 
 * @author  James Messinger (http://jamesmessinger.com)
 * @license MIT
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.host = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var userAgent = require('./user-agent');

module.exports = window.host = {
  node: false,
  karma: false,
  os: userAgent.getOS(),
  browser: userAgent.getBrowser(),
  env: {},
};

},{"./user-agent":2}],2:[function(require,module,exports){
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

        browser[userAgents[i].name] = {
          version: parseFloat(major + '.' + minor),
          majorVersion: major,
          minorVersion: minor,
          patchVersion: patch,
        };
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

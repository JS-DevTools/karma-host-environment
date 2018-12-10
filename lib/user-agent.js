"use strict";

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
      { name: "IE", pattern: /(?:MSIE|Edge)(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
      { name: "IE", pattern: /Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/ },
      { name: "chrome", pattern: /Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
      { name: "firefox", pattern: /Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/ },
      { name: "safari", pattern: /(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/ },
    ];

    for (var i = 0; i < userAgents.length; i++) {
      var match = userAgents[i].pattern.exec(userAgent);
      if (match) {
        var major = parseInt(match[1]) || 0;
        var minor = parseInt(match[2]) || 0;
        var patch = parseInt(match[3]) || 0;

        var thisBrowser = browser[userAgents[i].name] = {
          version: parseFloat(major + "." + minor),
          majorVersion: major,
          minorVersion: minor,
          patchVersion: patch,
        };

        thisBrowser["v" + major] = true;

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
      { name: "mac", pattern: /(Mac OS|Macintosh|iPhone|iPad)/ },
      { name: "windows", pattern: /(Windows NT|Windows Phone)/ },
      { name: "linux", pattern: /(Linux|Android)/ },
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
